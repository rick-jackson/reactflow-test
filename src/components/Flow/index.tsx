import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { MiniMap, Controls, useNodesState, useEdgesState, Node } from 'reactflow';

import type { State } from '../../store/reducer';
import { getCustomNode } from '../../common/utils/getCustomNodes';
import { getCustomEdges } from '../../common/utils/getCustomEdges';
import { setNodesPositions } from '../../store/actions';
import CustomNode from '../CustomNode';

import 'reactflow/dist/style.css';

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
        nodes: nodes.map(
          ({
            id,
            value,
            position,
          }: {
            id: string;
            value?: number | undefined;
            position: { x: number; y: number };
          }) => ({
            id,
            position,
            value,
          }),
        ),
      }),
    );
  };

  return (
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
  );
};

export default BasicFlow;
