"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, BriefcaseBusiness, ChevronDown, Layers3, Pause, Play, Users } from "lucide-react";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";
import { ecosystemConnections, ecosystemData, ecosystemDestinations, ecosystemPaths } from "@/lib/data/ecosystem";
import type { EcosystemId, EcosystemRelationship } from "@/lib/data/ecosystem";
import { connectionPath } from "./connection-path";
import styles from "./ProfessionalEcosystem.module.css";

const nodes: readonly EcosystemRelationship[] = ecosystemData;
const getNode = (id: EcosystemId) => nodes.find((node) => node.id === id)!;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotion(callback: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function subscribeToVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

type FlowPath = { id: string; d: string; from: string; to: string; preparation?: boolean };
type CardBounds = { left: number; right: number; top: number; bottom: number; cy: number };

function NodeMark({ node }: { node: EcosystemRelationship }) {
  if (node.logo) {
    return (
      <span className={styles.logo} aria-hidden="true">
        <Image src={node.logo} alt="" width={112} height={56} unoptimized className={node.darkLogo ? styles.lightLogo : undefined} />
        {node.darkLogo && <Image src={node.darkLogo} alt="" width={112} height={56} unoptimized className={`${styles.darkLogo} ${node.id === "gci-world" ? styles.invertLogo : ""} ${node.whiteInDark ? styles.whiteInDark : ""}`} />}
      </span>
    );
  }
  const Mark = node.id === "leadership" ? Users : node.id === "learning" ? BookOpen : Layers3;
  return <span className={styles.projectMark} aria-hidden="true"><Mark size={24} strokeWidth={1.4} /></span>;
}

function FutureRole({ inMap = false }: { inMap?: boolean }) {
  const titleId = useId();
  return (
    <div data-ecosystem-node={inMap ? "future" : undefined} className={styles.futureCard} aria-labelledby={titleId}>
      <p className={styles.futureEyebrow}><span aria-hidden="true" />Next chapter</p>
      <span className={styles.futureMark} aria-hidden="true"><BriefcaseBusiness size={26} strokeWidth={1.3} /></span>
      <h3 id={titleId}>First professional role</h3>
      <p className={styles.futureDescription}>A space for what comes next.</p>
      <dl className={styles.emptyFields}>
        {['Company', 'Role', 'Start date'].map((label) => <div key={label}><dt>{label}</dt><dd><span aria-hidden="true">—</span><span className={styles.srOnly}>To be added</span></dd></div>)}
      </dl>
      <p className={styles.futureFootnote}>Future role · not yet filled</p>
    </div>
  );
}

export default function ProfessionalEcosystem() {
  const [selectedId, setSelectedId] = useState<EcosystemId>("tumanow");
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [paths, setPaths] = useState<FlowPath[]>([]);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, () => window.matchMedia(reducedMotionQuery).matches, () => true);
  const pageVisible = useSyncExternalStore(subscribeToVisibility, () => document.visibilityState === "visible", () => false);
  const boardRef = useRef<HTMLDivElement>(null);
  const mobileMapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const detailRef = useRef<HTMLElement>(null);
  const detailId = useId();
  const headingId = useId();
  const selected = getNode(selectedId);
  const playing = !paused && !reducedMotion && pageVisible && inView;

  useEffect(() => {
    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting && entry.boundingClientRect.width > 0));
      setInView([...visibility.values()].some(Boolean));
    });
    if (boardRef.current) observer.observe(boardRef.current);
    if (mobileMapRef.current) observer.observe(mobileMapRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.slice(1);
      if (nodes.some((node) => node.id === id)) setSelectedId(id as EcosystemId);
    };
    const frame = requestAnimationFrame(syncHash);
    window.addEventListener("hashchange", syncHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const cards = board.querySelectorAll<HTMLElement>("[data-ecosystem-node]");
    const measure = () => {
      const container = board.getBoundingClientRect();
      if (!container.width || !container.height) { setPaths([]); return; }
      const bounds = new Map<string, CardBounds>();
      cards.forEach((element) => {
        const rect = element.getBoundingClientRect();
        bounds.set(element.dataset.ecosystemNode!, {
          left: rect.left - container.left, right: rect.right - container.left,
          top: rect.top - container.top, bottom: rect.bottom - container.top,
          cy: (rect.top + rect.bottom) / 2 - container.top,
        });
      });
      const future = bounds.get("future");
      if (!future) return;
      const next: FlowPath[] = [];
      ecosystemConnections.forEach((connection) => {
        const start = bounds.get(connection.from);
        const end = bounds.get(connection.to);
        if (!start || !end) return;
        const spine = start.right + 14;
        const points = "below" in connection && connection.below
          ? [
              { x: start.right, y: start.cy }, { x: spine, y: start.cy },
              { x: spine, y: end.bottom + 16 }, { x: end.left - 14, y: end.bottom + 16 },
              { x: end.left - 14, y: end.cy }, { x: end.left, y: end.cy },
            ]
          : [
              { x: start.right, y: start.cy }, { x: spine, y: start.cy },
              { x: spine, y: end.cy }, { x: end.left, y: end.cy },
            ];
        next.push({ id: `${connection.from}-${connection.to}`, d: connectionPath(points), from: connection.from, to: connection.to });
      });
      const collector = future.left - 16;
      ecosystemDestinations.forEach((id) => {
        const start = bounds.get(id);
        if (!start) return;
        // Earlier-column cards leave through a gutter, avoiding their parallel neighbour.
        const detour = id === "analytica" || id === "careertrack";
        const points = detour
          ? [
              { x: start.right, y: start.cy }, { x: start.right + 12, y: start.cy },
              { x: start.right + 12, y: start.top - 16 }, { x: collector, y: start.top - 16 },
              { x: collector, y: future.cy }, { x: future.left, y: future.cy },
            ]
          : [
              { x: start.right, y: start.cy }, { x: collector, y: start.cy },
              { x: collector, y: future.cy }, { x: future.left, y: future.cy },
            ];
        next.push({ id: `${id}-future`, d: connectionPath(points), from: id, to: "future", preparation: true });
      });
      setPaths(next);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(board);
    cards.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (playing) svgRef.current?.unpauseAnimations();
    else svgRef.current?.pauseAnimations();
  }, [playing, paths]);

  const selectNode = (id: EcosystemId, compact = false) => {
    setSelectedId(id);
    if (compact) requestAnimationFrame(() => {
      detailRef.current?.focus({ preventScroll: true });
      detailRef.current?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
    });
  };

  const nodeButton = (node: EcosystemRelationship, compact = false) => (
    <button
      key={node.id} type="button"
      data-ecosystem-node={compact ? undefined : node.id}
      className={`${styles.node} ${compact ? styles.compactNode : ''}`}
      style={compact ? undefined : { gridColumn: node.position.column, gridRow: node.position.row } as CSSProperties}
      aria-pressed={selectedId === node.id} aria-controls={detailId}
      aria-label={`${node.name}. ${node.relationship}. Show connection details.`}
      onClick={() => selectNode(node.id as EcosystemId, compact)}
    >
      <NodeMark node={node} />
      <span className={styles.nodeText}><span className={styles.nodeName}>{node.shortName}</span><span className={styles.nodeRelationship}>{node.relationship}</span></span>
      {compact && <ArrowUpRight className={styles.compactArrow} size={16} aria-hidden="true" />}
      <span className={styles.nodePort} aria-hidden="true" />
    </button>
  );

  return (
    <section className={styles.ecosystem} aria-labelledby={headingId} data-motion={playing ? "running" : "paused"}>
      <div className={styles.toolbar}>
        <div><p className={styles.eyebrow}>Connected experience</p><h2 id={headingId}>Different paths. One next chapter.</h2><p className={styles.hint}>Select a card to explore the connection and my involvement.</p></div>
        <button type="button" className={styles.motionButton} onClick={() => setPaused((value) => !value)} disabled={reducedMotion}>
          {paused && !reducedMotion ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {reducedMotion ? "Reduced motion" : paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>

      <div className={styles.mapFrame}>
      <div className={styles.desktopMap}>
        <div className={styles.columnLabels} aria-hidden="true"><span>Foundations</span><span>Experience & connections</span><span>Looking ahead</span></div>
        <div ref={boardRef} className={styles.board}>
          <svg ref={svgRef} className={styles.connections} aria-hidden="true" focusable="false">
            {paths.map((path, index) => {
              const active = path.from === selectedId || path.to === selectedId;
              return <g key={path.id} className={active ? styles.activeConnection : undefined}>
                <path d={path.d} className={path.preparation ? styles.preparationLine : styles.relationshipLine} />
                <circle r={2.7} className={styles.flowDot}>
                  <animateMotion path={path.d} dur={`${4.8 + index % 4 * 0.5}s`} begin={`${-index * 0.7}s`} repeatCount="indefinite" />
                </circle>
              </g>;
            })}
          </svg>
          {nodes.map((node) => nodeButton(node))}
          <div data-ecosystem-node="experience" className={styles.experienceCard}>
            <Image src="/badges/my portfolio profile pic.png" alt="John Rodmar Agapolo" width={42} height={42} sizes="42px" className={styles.experiencePortrait} />
            <p>My experience</p><span>Internships, building<br />& continued learning</span>
          </div>
          <div className={styles.futureSlot}><FutureRole inMap /></div>
        </div>
      </div>

      <div ref={mobileMapRef} className={styles.mobileMap}>
        {ecosystemPaths.map((path, index) => (
          <details key={path.title} className={styles.mobilePath} open={index === 0}>
            <summary><span className={styles.pathNumber} aria-hidden="true">0{index + 1}</span><span>{path.title}</span><ChevronDown size={16} className={styles.disclosureIcon} aria-hidden="true" /></summary>
            <div className={styles.pathContents}><p>{path.description}</p>
              <div className={path.parallel ? styles.parallelNodes : styles.sequentialNodes}>
                {path.nodes.map((id, nodeIndex) => <div key={id}>{!path.parallel && nodeIndex > 0 && <span className={styles.mobileConnector} aria-hidden="true"><ArrowDown size={13} /></span>}{nodeButton(getNode(id), true)}</div>)}
              </div>
              {path.parallel && <p className={styles.parallelNote}>Separate experiences, contributing together.</p>}
            </div>
          </details>
        ))}
        <div className={styles.mobileConvergence} aria-hidden="true"><span className={styles.mobileFlowDot} /><span>All paths contribute to what comes next</span></div>
        <FutureRole />
      </div>
      </div>

      <div className={styles.legend}>
        <span><i className={styles.solidKey} aria-hidden="true" />Experience connections</span>
        <span><i className={styles.dashedKey} aria-hidden="true" />Experience I bring forward</span>
      </div>
      <p className={styles.mapNote}>Paths toward the future role represent the experience I bring to it. They do not imply an employer, endorsement, or partnership between organizations.</p>
      {reducedMotion && <p className={styles.motionNote}>Animation is off to respect your device’s reduced-motion setting.</p>}

      <ul className={styles.srOnly} aria-label="Documented experience connections">
        {ecosystemConnections.map((edge) => <li key={`${edge.from}-${edge.to}`}>{edge.from === "experience" ? "My experience" : getNode(edge.from).shortName}: {edge.label} — {getNode(edge.to).shortName}.</li>)}
      </ul>

      <section ref={detailRef} id={detailId} tabIndex={-1} className={styles.detailPanel} aria-labelledby={`${detailId}-heading`}>
        {nodes.map((node) => <span key={node.id} id={node.id} className={styles.anchor} />)}
        <p className={styles.srOnly} role="status">Showing details for {selected.name}.</p>
        <div className={styles.detailTitle}><NodeMark node={selected} /><div><p className={styles.eyebrow}>{selected.group} · {selected.relationship}</p><h3 id={`${detailId}-heading`}>{selected.name}</h3></div></div>
        <div className={styles.detailColumns}><div><h4>The connection</h4><p>{selected.context}</p></div><div><h4>My involvement</h4><p>{selected.involvement}</p></div></div>
        <ul className={styles.detailLinks}>{selected.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}<ArrowUpRight size={15} aria-hidden="true" /></Link></li>)}</ul>
      </section>

      <section className={styles.learningSection} aria-labelledby={`${headingId}-learning`}>
        <div><p className={styles.eyebrow}>Continuing the journey</p><h2 id={`${headingId}-learning`}>Learning beyond the classroom</h2><p>Courses and community participation that support my technical growth.</p></div>
        <ul className={styles.learningList}>
          {['Cisco Networking Academy', 'DataCamp', 'AI Ready ASEAN', 'AWS Community Day'].map((name) => <li key={name}><BookOpen size={17} aria-hidden="true" /><span>{name}</span></li>)}
        </ul>
        <Link href="/credentials" className={styles.archiveLink}>Explore learning & participation records<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>
    </section>
  );
}
