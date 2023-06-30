import { memo } from "react";
import { NodeProps, Position } from "reactflow";
import { useSelector } from "react-redux";

import CustomInput from "../CustomSelect";

import * as Styled from "./index.styled";

const CustomNode = ({ data: nodeData }: NodeProps) => {
  const data = useSelector((state: any) => state.data);
  const lastNodeIndex = data.nodes.length - 1;

  return (
    <>
      {+nodeData.id !== 1 && (
        <Styled.Handle
          type="target"
          position={Position.Top}
          isConnectable={true}
          $hidden
        />
      )}
      <Styled.NodeContent />
      <CustomInput
        value={+nodeData.value}
        variant={nodeData.variant}
        data={nodeData}
      />

      <Styled.Handle
        type="source"
        $hidden={data.nodes[lastNodeIndex].id === nodeData.id}
        position={+nodeData.id === 1 ? Position.Bottom : Position.Right}
        isConnectable={false}
      />
    </>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);