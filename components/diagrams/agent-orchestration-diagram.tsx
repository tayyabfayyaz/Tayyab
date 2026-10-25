"use client";

import { FlowDot, PulseRing, useReducedMotionSafe } from "./diagram-utils";

/**
 * Hero visual: an orchestrator agent dispatching a task to three worker
 * agents (Research, Tools/API, Memory) and assembling their replies into a
 * result. Pure SVG + Framer Motion — no stock image, no video.
 *
 * Respects `prefers-reduced-motion`: the loop is skipped and the diagram
 * renders its settled end state instead.
 */

const CYCLE = 4.4;

const ORCH = { x: 150, y: 220 };
const RESEARCH = { x: 470, y: 86 };
const TOOLS = { x: 470, y: 220 };
const MEMORY = { x: 470, y: 354 };
const RESULT = { x: 740, y: 220 };

const WORKERS = [
  { node: RESEARCH, label: "Research Agent", sub: "Looks things up" },
  { node: TOOLS, label: "Tools / API", sub: "Calls real systems" },
  { node: MEMORY, label: "Memory", sub: "Session context" },
];

function NodeBox({
  x,
  y,
  w,
  h,
  label,
  sub,
  emphasis = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  emphasis?: boolean;
}) {
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={10}
        className={emphasis ? "fill-primary/10 stroke-primary" : "fill-card stroke-border"}
        strokeWidth={1.5}
      />
      <text
        x={x}
        y={sub ? y - 4 : y + 4}
        textAnchor="middle"
        className={emphasis ? "fill-primary" : "fill-foreground"}
        style={{ fontSize: 15, fontWeight: 600 }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x}
          y={y + 16}
          textAnchor="middle"
          className="fill-muted-foreground font-mono"
          style={{ fontSize: 11 }}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

export function AgentOrchestrationDiagram({ className }: { className?: string }) {
  const reduced = useReducedMotionSafe();

  return (
    <div
      role="img"
      aria-label="Diagram: an orchestrator agent routes a task to Research, Tools/API, and Memory worker agents, then assembles their replies into a result."
      className={className}
    >
      <svg
        viewBox="0 0 820 440"
        aria-hidden="true"
        focusable="false"
        className="h-auto w-full"
      >
        {/* dispatch + response lines */}
        {WORKERS.map(({ node }) => (
          <line
            key={`line-${node.x}-${node.y}`}
            x1={ORCH.x + 86}
            y1={ORCH.y}
            x2={node.x - 96}
            y2={node.y}
            className="stroke-border"
            strokeWidth={1.5}
          />
        ))}
        <line
          x1={ORCH.x}
          y1={ORCH.y - 40}
          x2={ORCH.x}
          y2={ORCH.y - 90}
          className="stroke-border"
          strokeWidth={1.5}
        />
        <line x1={ORCH.x + 90} y1={ORCH.y} x2={RESULT.x - 72} y2={RESULT.y} className="stroke-border" strokeWidth={1.5} />

        {/* incoming task */}
        <text x={ORCH.x} y={ORCH.y - 100} textAnchor="middle" className="fill-muted-foreground font-mono" style={{ fontSize: 11 }}>
          incoming request
        </text>

        {/* dispatch dots: orchestrator -> each worker */}
        {WORKERS.map(({ node }, i) => (
          <FlowDot
            key={`dispatch-${i}`}
            from={{ x: ORCH.x + 86, y: ORCH.y }}
            to={{ x: node.x - 96, y: node.y }}
            delay={0}
            duration={0.8}
            cycle={CYCLE}
            r={4}
            className="fill-primary"
            reduced={reduced}
          />
        ))}

        {/* response dots: each worker -> orchestrator */}
        {WORKERS.map(({ node }, i) => (
          <FlowDot
            key={`response-${i}`}
            from={{ x: node.x - 96, y: node.y }}
            to={{ x: ORCH.x + 86, y: ORCH.y }}
            delay={1.0}
            duration={0.8}
            cycle={CYCLE}
            r={4}
            className="fill-foreground/70"
            reduced={reduced}
          />
        ))}

        {/* final dot: orchestrator -> result */}
        <FlowDot
          from={{ x: ORCH.x + 90, y: ORCH.y }}
          to={{ x: RESULT.x - 72, y: RESULT.y }}
          delay={2.0}
          duration={0.7}
          cycle={CYCLE}
          r={5}
          className="fill-primary"
          reduced={reduced}
        />

        {/* pulse rings on arrival */}
        {WORKERS.map(({ node }, i) => (
          <PulseRing key={`pulse-w-${i}`} cx={node.x} cy={node.y} rMax={70} delay={0.8} duration={0.5} cycle={CYCLE} className="stroke-primary" reduced={reduced} />
        ))}
        <PulseRing cx={ORCH.x} cy={ORCH.y} rMax={60} delay={1.8} duration={0.5} cycle={CYCLE} className="stroke-primary" reduced={reduced} />
        <PulseRing cx={RESULT.x} cy={RESULT.y} rMax={55} delay={2.7} duration={0.5} cycle={CYCLE} className="stroke-primary" reduced={reduced} />

        {/* nodes */}
        <NodeBox x={ORCH.x} y={ORCH.y} w={172} h={76} label="Orchestrator" sub="Plans & delegates" emphasis />
        {WORKERS.map(({ node, label, sub }, i) => (
          <NodeBox key={`node-${i}`} x={node.x} y={node.y} w={192} h={68} label={label} sub={sub} />
        ))}
        <NodeBox x={RESULT.x} y={RESULT.y} w={140} h={68} label="Result" sub="Delivered" emphasis />
      </svg>
    </div>
  );
}

export default AgentOrchestrationDiagram;
