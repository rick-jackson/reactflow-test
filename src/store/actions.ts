import type { Node, Edge } from "reactflow";

export const SET_DATA = "SET_DATA";

export type Payload = {
  nodes: any;
  node: Node;
  edge: Edge;
  selectedNode: {
    id: string;
    value: number;
  };
};

export const setData = (data: Payload) => ({
  type: SET_DATA,
  payload: data,
});
