import type Node from '../entities/node';
import type Edge from '../entities/edge';
import { DataNode, RESET_FLOW, SET_DATA, SET_NODES } from './actions';
import { getPreparedNodes } from '../common/utils/getPreparedNodesData';

export type State = {
  data: {
    nodes: Node[];
    edges: Edge[];
  };
};

export const initialState: State = {
  data: {
    edges: [],
    nodes: [
      {
        id: '1',
        data: {
          id: '1',
        },
        position: { x: 20, y: 20 },
      },
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: { payload: any; type: string }) => {
  let selectedNode;
  switch (action.type) {
    case SET_DATA:
      selectedNode = state.data.nodes.find(
        (el: Node) => el.id === action.payload.selectedNode.id,
      ) as Node;
      return {
        ...state,
        data: !selectedNode.value
          ? {
              edges: [...state.data.edges, action.payload.edge],
              nodes: [
                ...getPreparedNodes(
                  action.payload.selectedNode as DataNode['selectedNode'],
                  state.data.nodes,
                ),
                action.payload.node,
              ],
            }
          : {
              nodes: [...getPreparedNodes(action.payload.selectedNode, state.data.nodes)],
              edges: state.data.edges,
            },
      };
    case SET_NODES:
      return {
        ...state,
        data: {
          edges: state.data.edges,
          nodes: action.payload.nodes,
        },
      };
    case RESET_FLOW:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
