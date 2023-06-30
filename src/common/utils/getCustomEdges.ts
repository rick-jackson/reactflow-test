import { Edge, MarkerType } from "reactflow";

export const getCustomEdges = (edges: Edge[]): Edge[] => {
  return edges.map((edge: Edge) => ({
    ...edge,
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }));
};
