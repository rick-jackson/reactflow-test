import { Edge, Node } from "reactflow";

export const getFlowData = (data: Node) => {
  const node = {
    id: `${+data.id + 1}`,
    position: {
      x: (+data.position?.x || 20) + 200,
      y: (+data.position?.y || 20) + 200,
    },
  } as Node;
  const edge = {
    id: `e${data.id}-${+data.id + 1}`,
    source: data.id,
    target: `${+data.id + 1}`,
  } as Edge;

  return {
    node,
    edge,
  };
};
