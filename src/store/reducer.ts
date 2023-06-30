import type { Edge, Node } from "reactflow";

import { type Payload, SET_DATA } from "./actions";
import { getPreparedNodes } from "../common/utils/getPreparedNodesData";

export type CustomNode = Node & { value?: number };

export type State = {
  data: {
    nodes: CustomNode[];
    edges: Edge[];
  };
};

const initialState: State = {
  data: {
    edges: [],
    nodes: [
      {
        id: "1",
        data: {
          id: "1",
        },
        position: { x: 20, y: 20 },
      },
    ],
  },
};

const reducer = (
  state = initialState,
  action: { payload: Payload; type: string }
) => {
  switch (action.type) {
    case SET_DATA:
      if (action.payload.nodes) {
        return {
          ...state,
          data: {
            edges: state.data.edges,
            nodes: action.payload.nodes,
          },
        };
      } else {
        const selectedNode = state.data.nodes.find(
          (el: Node) => el.id === action.payload.selectedNode.id
        ) as CustomNode;
        return {
          ...state,
          data: !selectedNode.value
            ? {
                edges: [...state.data.edges, action.payload.edge],
                nodes: [
                  ...getPreparedNodes(
                    action.payload.selectedNode as Payload["selectedNode"],
                    state.data.nodes
                  ),
                  action.payload.node,
                ],
              }
            : {
                nodes: [
                  ...getPreparedNodes(
                    action.payload.selectedNode as Payload["selectedNode"],
                    state.data.nodes
                  ),
                ],
                edges: state.data.edges,
              },
        };
      }
    default:
      return state;
  }
};

export default reducer;
