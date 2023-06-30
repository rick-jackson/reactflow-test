import type { Edge } from 'reactflow';

export const SET_DATA = 'SET_DATA';
export const SET_NODES = 'SET_NODES';
export const RESET_FLOW = 'RESET_FLOW';

export type CustomNode = {
  id: string;
  value?: number | undefined;
  position: { x: number; y: number };
  data?: {
    id?: string;
    value?: number;
  };
};

export type DataNode = {
  node: CustomNode;
  edge: Edge;
  selectedNode: {
    id: string;
    value: number;
  };
};

export type NodePosition = {
  nodes: CustomNode[];
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
