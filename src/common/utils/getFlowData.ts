import type Node from '../../entities/node';
import type Edge from '../../entities/edge';

export const getFlowData = (data: Node) => {
  const node = {
    id: `${+data.id + 1}`,
    position: {
      x: (+data.position?.x || 20) + (+data.id === 1 ? 200 : 270),
      y: (+data.position?.y || 20) + (+data.id === 1 ? 200 : 150),
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
