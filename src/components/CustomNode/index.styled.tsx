import styled from 'styled-components';
import { Handle as ReactFlowHandle } from 'reactflow';

export const Handle = styled(ReactFlowHandle)<{
  $hidden: boolean;
  position: string;
}>`
  width: 6px;
  height: 6px;
  background: #adb5bd;
  border: none;
  ${({ $hidden }) => $hidden && 'visibility: hidden;'}
  ${({ position }) => position === 'right' && 'top: 82%; right: -3px'};
`;

export const NodeContent = styled.div`
  height: 70px;
  border-radius: 4px;
  background-color: #fff;
`;
