import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Select = styled.div<{ $open: boolean }>`
  height: 40px;
  margin-top: 4px;
  outline: 0.658px solid ${({ $open }) => ($open ? '#EAF2FF' : '#479f76')};
  border-radius: 4px;
  ${({ $open }) => $open && 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;'}
  cursor: pointer;
  color: #37352f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170.227%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  background-color: #fff;
`;

export const Options = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  outline: 0.658px solid #eaf2ff;
  width: calc(100% - 8px);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 9;
`;

export const Option = styled.li`
  text-align: left;
  padding: 12px;
  cursor: pointer;
  transition: 0.2s;
  border-bottom: 0.658px solid #eaf2ff;

  &:nth-last-child(-n + 1) {
    border-bottom: none;
  }

  &:hover {
    background-color: #eaf2ff;
  }
`;

export const Arrow = styled(ArrowForwardIosIcon)<{ $open: boolean }>`
  color: #2c7dfa;
  transform: rotate(${({ $open }) => ($open ? '270deg' : '90deg')});
`;
