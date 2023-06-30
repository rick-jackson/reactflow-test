import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
} from "reactflow";

import CustomNode from "../CustomNode";
import { getCustomNode } from "../../common/utils/getCustomNodes";
import { getCustomEdges } from "../../common/utils/getCustomEdges";
import "reactflow/dist/style.css";
import { State } from "../../store/reducer";
import { setData } from "../../store/actions";

const nodeTypes = {
  custom: CustomNode,
};

const BasicFlow = () => {
  const data = useSelector((state: State) => state.data);

  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setNodes(getCustomNode(data.nodes));
    setEdges(getCustomEdges(data.edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nds: any) => {
        dispatch(
          // @ts-ignore
          setData({
            nodes: nds,
          })
        );
        return applyNodeChanges(changes, nds);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setNodes]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap zoomable pannable />
      <Controls />
    </ReactFlow>
  );
};

export default BasicFlow;
