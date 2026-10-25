"use client";

import type { ArchitectureNode, ArchitectureNodeKind, ProjectArchitecture } from "@/content/projects";
import { FlowDot, PulseRing, useReducedMotionSafe } from "./diagram-utils";

/**
 * Data-driven version of the hero diagram, used on case-study pages.
 * Lays nodes out in columns by kind (orchestrator → worker → tool/data),
 * draws each edge from `architecture.edges`, and animates a small dot
 * along every edge. Same `prefers-reduced-motion` behavior as the hero
 * diagram (handled inside FlowDot/PulseRing).
 */

const CYCLE = 4.2;
const COLUMN_ORDER: ArchitectureNodeKind[][] = [["orchestrator"], ["worker"], ["tool", "data"]];

function columnIndex(kind: ArchitectureNodeKind): number {
  const idx = COLUMN_ORDER.findIndex((group) => group.includes(kind));
  return idx === -1 ? COLUMN_ORDER.length - 1 : idx;
}

function wrapLabel(label: string, maxCharsPerLine = 18): string[] {
  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

function truncate(text: string, max = 34): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

interface LaidOutNode extends ArchitectureNode {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: string[];
}

export function ArchitectureDiagram({
  architecture,
  className,
}: {
  architecture: ProjectArchitecture;
  className?: string;
}) {
  const { nodes, edges } = architecture;

  const byColumn = new Map<number, ArchitectureNode[]>();
  for (const node of nodes) {
    const col = columnIndex(node.kind);
    byColumn.set(col, [...(byColumn.get(col) ?? []), node]);
  }
  const columnCount = Math.max(...Array.from(byColumn.keys()), 0) + 1;
  const maxPerColumn = Math.max(1, ...Array.from(byColumn.values()).map((n) => n.length));

  const width = 840;
  const height = Math.max(320, maxPerColumn * 120 + 40);
  const leftMargin = 120;
  const rightMargin = 120;
  const colSpan = columnCount > 1 ? (width - leftMargin - rightMargin) / (columnCount - 1) : 0;

  const laidOut = new Map<string, LaidOutNode>();
  byColumn.forEach((colNodes, col) => {
    const x = columnCount > 1 ? leftMargin + col * colSpan : width / 2;
    colNodes.forEach((node, i) => {
      const y = ((i + 1) / (colNodes.length + 1)) * height;
      const lines = wrapLabel(node.label);
      const h = 44 + (lines.length - 1) * 15 + (node.description ? 15 : 0);
      laidOut.set(node.id, { ...node, x, y, w: 178, h, lines });
    });
  });

  const laidOutNodes = Array.from(laidOut.values());
  const reduced = useReducedMotionSafe();

  return (
    <div
      role="img"
      aria-label={architecture.summary}
      className={className}
    >
      <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false" className="h-auto w-full">
        {edges.map((edge, i) => {
          const from = laidOut.get(edge.from);
          const to = laidOut.get(edge.to);
          if (!from || !to) return null;
          const fromRight = from.x < to.x;
          const x1 = fromRight ? from.x + from.w / 2 : from.x - from.w / 2;
          const x2 = fromRight ? to.x - to.w / 2 : to.x + to.w / 2;

          // When another edge connects this same pair of nodes (e.g. a
          // request/response pair drawn in both directions), offset each
          // one vertically so their lines and labels don't sit on top of
          // each other and turn into overlapping, unreadable text.
          const pairKey = [edge.from, edge.to].sort().join("|");
          const siblings = edges.filter((e) => [e.from, e.to].sort().join("|") === pairKey);
          const siblingIndex = siblings.indexOf(edge);
          const offset = (siblingIndex - (siblings.length - 1) / 2) * 22;

          const y1 = from.y + offset;
          const y2 = to.y + offset;
          // Spread sibling labels along the line (not just vertically) so a
          // bidirectional pair's two labels don't both land in the same
          // crowded spot between the nodes.
          const t = siblings.length > 1 ? 0.32 + (siblingIndex / (siblings.length - 1)) * 0.36 : 0.5;
          const labelX = x1 + (x2 - x1) * t;
          const labelY = y1 + (y2 - y1) * t - 6;
          return (
            <g key={`edge-${i}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-border" strokeWidth={1.5} />
              {edge.label && (
                <text x={labelX} y={labelY} textAnchor="middle" className="fill-muted-foreground font-mono" style={{ fontSize: 10 }}>
                  {edge.label}
                </text>
              )}
              <FlowDot
                from={{ x: x1, y: y1 }}
                to={{ x: x2, y: y2 }}
                delay={i * 0.5}
                duration={0.7}
                cycle={CYCLE}
                r={4}
                className="fill-primary"
                reduced={reduced}
              />
            </g>
          );
        })}

        {laidOutNodes.map((node, i) => {
          const emphasis = node.kind === "orchestrator";
          return (
            <g key={node.id}>
              <PulseRing cx={node.x} cy={node.y} rMax={node.w / 2 + 16} delay={i * 0.5 + 0.6} duration={0.5} cycle={CYCLE} className="stroke-primary" reduced={reduced} />
              <rect
                x={node.x - node.w / 2}
                y={node.y - node.h / 2}
                width={node.w}
                height={node.h}
                rx={10}
                className={
                  emphasis
                    ? "fill-primary/10 stroke-primary"
                    : node.kind === "worker"
                      ? "fill-card stroke-border"
                      : "fill-secondary stroke-border"
                }
                strokeWidth={1.5}
              />
              {node.lines.map((line, li) => (
                <text
                  key={li}
                  x={node.x}
                  y={node.y - ((node.lines.length - 1) * 15) / 2 + li * 15 - (node.description ? 6 : 0)}
                  textAnchor="middle"
                  className={emphasis ? "fill-primary" : "fill-foreground"}
                  style={{ fontSize: 13, fontWeight: 600 }}
                >
                  {line}
                </text>
              ))}
              {node.description && (
                <text
                  x={node.x}
                  y={node.y + ((node.lines.length - 1) * 15) / 2 + 12}
                  textAnchor="middle"
                  className="fill-muted-foreground font-mono"
                  style={{ fontSize: 9 }}
                >
                  {truncate(node.description)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default ArchitectureDiagram;
