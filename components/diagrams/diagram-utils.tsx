"use client";

import { useEffect, useState } from "react";
import { motion, type Transition } from "framer-motion";

/**
 * `MotionConfig reducedMotion="user"` (set globally in app/layout.tsx) only
 * disables transform/layout animations — it does NOT stop these diagrams'
 * `repeat: Infinity` SVG attribute animations (cx/cy/opacity keyframes), so
 * the infinite loop here needs its own explicit reduced-motion check.
 *
 * `framer-motion`'s own `useReducedMotion()` reads `window.matchMedia`
 * synchronously on the client's first render, which does not match what
 * the server rendered (no `window`) and throws a hydration mismatch. This
 * hook instead always starts at `false` — identical on server and the
 * client's first paint — and only flips after mount, inside an effect,
 * which is a safe, ordinary state update rather than a hydration diff.
 */
export function useReducedMotionSafe(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

/**
 * Shared helpers for the hero and case-study agent diagrams.
 *
 * Every looping animation here is built the same way: a `delay`, a
 * `duration`, and a shared `cycle` length. `repeatDelay` is whatever is left
 * of the cycle after delay+duration, so many elements with different delays
 * stay in sync and restart together every `cycle` seconds.
 */
export function useLoopTransition(delay: number, duration: number, cycle: number): Transition {
  return {
    delay,
    duration,
    repeat: Infinity,
    repeatDelay: Math.max(cycle - delay - duration, 0),
    ease: "easeInOut",
  };
}

export interface Point {
  x: number;
  y: number;
}

interface FlowDotProps {
  from: Point;
  to: Point;
  delay: number;
  duration: number;
  cycle: number;
  className?: string;
  r?: number;
  /** When true, renders the settled end state once, with no loop. */
  reduced?: boolean;
}

/** A small dot that travels from one node to another, looping on a shared cycle. */
export function FlowDot({ from, to, delay, duration, cycle, className, r = 4, reduced }: FlowDotProps) {
  const transition = useLoopTransition(delay, duration, cycle);

  if (reduced) {
    return <circle cx={to.x} cy={to.y} r={r} className={className} opacity={1} />;
  }

  return (
    <motion.circle
      r={r}
      className={className}
      initial={{ cx: from.x, cy: from.y, opacity: 0 }}
      animate={{
        cx: [from.x, from.x, to.x, to.x],
        cy: [from.y, from.y, to.y, to.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{ ...transition, times: [0, 0.1, 0.85, 1] }}
    />
  );
}

interface PulseRingProps {
  cx: number;
  cy: number;
  rMax: number;
  delay: number;
  duration: number;
  cycle: number;
  className?: string;
  /** When true, renders nothing — no settled state needed for a pulse. */
  reduced?: boolean;
}

/** A ring that briefly brightens around a node when a signal arrives. */
export function PulseRing({ cx, cy, rMax, delay, duration, cycle, className, reduced }: PulseRingProps) {
  const transition = useLoopTransition(delay, duration, cycle);

  if (reduced) {
    return null;
  }

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      className={className}
      fill="none"
      strokeWidth={1.5}
      initial={{ r: rMax * 0.6, opacity: 0 }}
      animate={{ r: [rMax * 0.6, rMax], opacity: [0, 0.6, 0] }}
      transition={transition}
    />
  );
}
