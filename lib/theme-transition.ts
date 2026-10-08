type ThemeTransition = {
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  finished: Promise<void>;
  skipTransition: () => void;
};

type ThemeTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => ThemeTransition;
};

type RevealOrigin = { x: number; y: number };
type TransitionOptions = { origin?: RevealOrigin; animate?: boolean };
type ThemeViewport = Pick<Window, "innerWidth" | "innerHeight" | "matchMedia" | "getComputedStyle"> & {
  CSS?: Pick<typeof CSS, "supports">;
};

export function getThemeReveal(origin: RevealOrigin, width: number, height: number) {
  const x = Math.min(Math.max(origin.x, 0), width);
  const y = Math.min(Math.max(origin.y, 0), height);
  // Cover the farthest corner, including fractional pixels at the viewport edge.
  const radius = Math.ceil(Math.hypot(Math.max(x, width - x), Math.max(y, height - y))) + 2;
  return { x, y, radius };
}

export function createThemeTransitionController(page: ThemeTransitionDocument, viewport: ThemeViewport) {
  const root = page.documentElement;
  let revision = 0;
  let active: ThemeTransition | undefined;

  const clear = () => {
    root.removeAttribute("data-theme-transition");
    for (const property of ["--theme-reveal-x", "--theme-reveal-y", "--theme-reveal-radius"]) {
      root.style.removeProperty(property);
    }
  };

  return (update: () => void, { origin, animate = true }: TransitionOptions = {}) => {
    const current = ++revision;
    active?.skipTransition();
    active = undefined;
    clear();

    let committed = false;
    const commit = () => {
      // A skipped transition can still call its update later. Only the latest choice may apply.
      if (current !== revision || committed) return;
      update();
      committed = true;
    };
    const finish = () => {
      if (current !== revision) return;
      if (!committed) {
        commit();
        void viewport.getComputedStyle(root).color;
      }
      active = undefined;
      clear();
    };
    const immediately = () => {
      root.setAttribute("data-theme-transition", "instant");
      commit();
      // Apply the new colors while element transitions are suppressed, then restore hover feedback.
      void viewport.getComputedStyle(root).color;
      finish();
    };

    const canReveal = animate
      && page.visibilityState === "visible"
      && !viewport.matchMedia("(prefers-reduced-motion: reduce)").matches
      && typeof page.startViewTransition === "function"
      && viewport.CSS?.supports("selector(::view-transition-new(root))")
      && viewport.CSS.supports("clip-path", "circle(1px at 1px 1px)");

    if (!canReveal) {
      immediately();
      return;
    }

    const reveal = getThemeReveal(
      origin ?? { x: viewport.innerWidth / 2, y: viewport.innerHeight / 2 },
      viewport.innerWidth,
      viewport.innerHeight,
    );
    root.style.setProperty("--theme-reveal-x", `${reveal.x}px`);
    root.style.setProperty("--theme-reveal-y", `${reveal.y}px`);
    root.style.setProperty("--theme-reveal-radius", `${reveal.radius}px`);
    root.setAttribute("data-theme-transition", "reveal");

    try {
      const transition = page.startViewTransition!(commit);
      active = transition;
      // Hidden tabs, interrupted snapshots, and unsupported captures can reject these promises.
      // The selected theme must still apply, and an older completion must not clear a newer wave.
      void Promise.allSettled([
        transition.ready,
        transition.updateCallbackDone,
        transition.finished,
      ]).then(finish);
    } catch {
      immediately();
    }
  };
}
