import type { State } from '../../store/reducer';
import type { CustomNode } from '../../store/actions';

export const getPreparedNodes = (
  { id, value }: { id: string; value: number },
  nodes: State['data']['nodes'],
): CustomNode[] => {
  const selectedNodeIndex = nodes.findIndex((el: CustomNode) => el.id === id);
  nodes[selectedNodeIndex] = { ...nodes[selectedNodeIndex], value };
  return nodes;
};
