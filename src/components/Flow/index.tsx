import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";

import type { CustomNode as CustomNodeType, State } from "../../store/reducer";
import { getCustomNode } from "../../common/utils/getCustomNodes";
import { getCustomEdges } from "../../common/utils/getCustomEdges";
import { setData } from "../../store/actions";
import CustomNode from "../CustomNode";

import "reactflow/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};

const BasicFlow = () => {
  const data = useSelector((state: State) => state.data);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setNodes(getCustomNode(data.nodes));
    setEdges(getCustomEdges(data.edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleNodesChange = () => {
    dispatch(
      // @ts-ignore
      setData({
        nodes: nodes.map(({ id, position, value }: CustomNodeType) => ({
          id,
          position,
          value,
        })),
      })
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
