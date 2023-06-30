import { Node } from "reactflow";
import { CustomNode, State } from "../../store/reducer";

export const getPreparedNodes = (
  { id, value }: { id: string; value: number },
  nodes: State["data"]["nodes"]
): CustomNode[] => {
  const selectedNodeIndex = nodes.findIndex((el: Node) => el.id === id);
  nodes[selectedNodeIndex] = { ...nodes[selectedNodeIndex], value };
  return nodes;
};
