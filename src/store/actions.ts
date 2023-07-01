import type Edge from '../entities/edge';
import type Node from '../entities/node';

export const SET_DATA = 'SET_DATA';
export const SET_NODES = 'SET_NODES';
export const RESET_FLOW = 'RESET_FLOW';

export type DataNode = {
  node: Node;
  edge: Edge;
  selectedNode: {
    id: string;
    value: number;
  };
};

export type NodePosition = {
  nodes: Node[];
};

export const setData = (data: DataNode) => ({
  type: SET_DATA,
  payload: data,
});

export const setNodesPositions = (data: NodePosition) => ({
  type: SET_NODES,
  payload: data,
});

export const resetFlow = () => ({
  type: RESET_FLOW,
});
