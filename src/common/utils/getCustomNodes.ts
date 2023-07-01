import type Node from '../../entities/node';

export const getCustomNode = (nodes: Node[]): Node[] => {
  const nodesVariant: number[] = [];

  return nodes.map((el: Node) => {
    nodesVariant.push(el.value as number);
    return {
      ...el,
      type: 'custom',
      data: {
        id: el.id,
        position: el.position,
        value: el.value,
        variant: nodesVariant.join('-'),
      },
    };
  });
};
