import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { MiniMap, Controls, useNodesState, useEdgesState, Node } from 'reactflow';

import { type State } from '../../store/reducer';
import type { CustomNode as CustomNodeType } from '../../store/actions';
import { getCustomNode } from '../../common/utils/getCustomNodes';
import { getCustomEdges } from '../../common/utils/getCustomEdges';
import { resetFlow, setNodesPositions } from '../../store/actions';
import CustomNode from '../CustomNode';

import 'reactflow/dist/style.css';
import * as Styled from './index.styled';

const nodeTypes = {
  custom: CustomNode,
};

const BasicFlow = () => {
  const data = useSelector((state: State) => state.data);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setNodes(getCustomNode(data.nodes) as Node[]);
    setEdges(getCustomEdges(data.edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleNodesChange = () => {
    dispatch(
      setNodesPositions({
        nodes: nodes.map(({ id, value, position }: CustomNodeType) => ({
          id,
          position,
          value,
        })),
      }),
    );
  };

  return (
    <>
      <Styled.ResetButton
        onClick={() => {
          dispatch(resetFlow());
        }}
      >
        Reset flow
      </Styled.ResetButton>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDragStop={handleNodesChange}
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap zoomable pannable />
        <Controls />
      </ReactFlow>
    </>
  );
};

export default BasicFlow;
