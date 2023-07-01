import { useState } from 'react';
import { useDispatch } from 'react-redux';

import type Node from '../../entities/node';
import { setData } from '../../store/actions';
import { variants } from '../../common/data/selectVariants';
import { getFlowData } from '../../common/utils/getFlowData';

import * as Styled from './index.styled';

type CustomSelectProps = {
  value?: number;
  variant?: string;
  data: Node;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ data, value, variant }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | undefined>(value);

  const dispatch = useDispatch();

  const handleSetData = (value: number) => {
    dispatch(
      setData({
        ...getFlowData(data),
        selectedNode: {
          id: data.id,
          value,
        },
      }),
    );
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const handleSelect = (param: number) => {
    if (param !== selectedOption) {
      setSelectedOption(param);
      handleClose();
      handleSetData(param);
    }
  };

  return (
    <>
      <Styled.Select $open={open} onClick={handleClose}>
        {selectedOption ? `Варіант ${variant}` : open ? 'Виберіть значення' : 'Вибрати значення'}
        <Styled.Arrow fontSize="inherit" $open={open} />
      </Styled.Select>
      {open && (
        <Styled.Options>
          {variants.map(({ label, value }) => (
            <Styled.Option key={value} onClick={() => handleSelect(value)}>
              <input
                type="checkbox"
                checked={selectedOption === value}
                onChange={() => handleSelect(value)}
              />{' '}
              {label}
            </Styled.Option>
          ))}
        </Styled.Options>
      )}
    </>
  );
};

export default CustomSelect;
