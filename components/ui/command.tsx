"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type CommandContextValue = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

const CommandContext = React.createContext<CommandContextValue | null>(null);

export function useCommandContext() {
  const context = React.useContext(CommandContext);

  if (!context) {
    throw new Error("Command components must be used within CommandDialog.");
  }

  return context;
}

function CommandDialog({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setInputValue("");
    }
  }, [open]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onOpenChange]);

  if (!open) {
    return null;
  }

  return (
    <CommandContext.Provider value={{ inputValue, setInputValue }}>
      <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 py-16 backdrop-blur-sm">
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          {children}
        </div>
      </div>
    </CommandContext.Provider>
  );
}

function CommandInput({
  placeholder,
}: {
  placeholder?: string;
}) {
  const { inputValue, setInputValue } = useCommandContext();

  return (
    <div className="border-b border-border px-4 py-3">
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={placeholder}
        className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        autoFocus
      />
    </div>
  );
}

function CommandList({ children }: { children: React.ReactNode }) {
  return <div className="max-h-[60vh] overflow-y-auto p-2">{children}</div>;
}

function CommandGroup({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 py-1.5">
      {heading ? (
        <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {heading}
        </div>
      ) : null}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function CommandItem({
  className,
  children,
  onSelect,
}: {
  className?: string;
  children: React.ReactNode;
  onSelect?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted",
        className,
      )}
    >
      {children}
    </button>
  );
}

function CommandSeparator() {
  return <div className="my-2 h-px bg-border" />;
}

function CommandEmpty({ children }: { children: React.ReactNode }) {
  const { inputValue } = useCommandContext();

  return inputValue ? (
    <div className="px-6 py-10 text-center text-sm text-muted-foreground">
      {children}
    </div>
  ) : null;
}

export {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
};