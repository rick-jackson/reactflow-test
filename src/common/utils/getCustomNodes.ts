import type { CustomNode } from "../../store/reducer";

export const getCustomNode = (nodes: CustomNode[]): CustomNode[] => {
  const nodesVariant: number[] = [];

  return nodes.map((el: CustomNode) => {
    nodesVariant.push(el.value as number);
    return {
      ...el,
      type: "custom",
      data: {
        id: el.id,
        position: el.position,
        value: el.value,
        variant: nodesVariant.join("-"),
      },
    };
  });
};
