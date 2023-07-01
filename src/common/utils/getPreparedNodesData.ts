import type Node from '../../entities/node';
import type { State } from '../../store/reducer';

export const getPreparedNodes = (
  { id, value }: { id: string; value: number },
  nodes: State['data']['nodes'],
): Node[] => {
  const selectedNodeIndex = nodes.findIndex((el: Node) => el.id === id);
  nodes[selectedNodeIndex] = { ...nodes[selectedNodeIndex], value };
  return nodes;
};
