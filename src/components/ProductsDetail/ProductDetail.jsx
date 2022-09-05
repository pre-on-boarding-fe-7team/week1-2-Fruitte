import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { get } from '../../api/api';
import Tab from '../Categorize/Tab';

function ProductDetail() {
  let [items, setItems] = useState([]);
  let { id } = useParams();

  const OPTIONS = [
    { value: '배송비(착불)', name: '배송비(착불)' },
    { value: '배송비(선결제)', name: '배송비(선결제)' },
  ];
  const [setSelectItem] = useState('');
  const 배송 = e => {
    setSelectItem(e.target.value);
  };
  const [options, setOption] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = e => {
    const _options = options.filter((o, idx) => {
      if (o.text !== e.target.value) {
        return o.text;
      } else {
        alert('이미 선택된 옵션입니다');
      }
    });
    let price = items[id]?.salesList.map(option => <div>{option.price}</div>);

    setOption([..._options, { text: e.target.value, sum: price[1] }]);
    setSum(sum + options.price);
  };

  const [counter, setCounter] = useState(0);
  const [changecount, setchangecount] = useState([0, 0, 0]);

  let increaseCount = idx => {
    let copy = [...changecount];
    copy[idx] = copy[idx] + 1;
    setchangecount(copy);
    setCounter(counter + 1);
  };

  let decreaseCount = idx => {
    let copy = [...changecount];
    copy[idx] = copy[idx] - 1;
    setchangecount(copy);
    setCounter(counter - 1);
  };

  let deleteitems = i => {
    let copy = [...options];
    copy.splice(i, 1);
    setOption(copy);
  };
  let selected = items[id]?.salesList.map(option => (
    <option key={option.value} value={option.title} defaultValue={option.title}>
      <div>
        <div> {option.title} </div>
        <div>{option.price}</div>
      </div>
    </option>
  ));

  const getData = async () => {
    const res = await get();
    setItems(res.products);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <img src={items[id]?.url} alt="img" />
      <p>{items[id]?.name}</p>
      <SelectBoxWrapper>
        <Select onChange={배송}>
          {OPTIONS.map(option => (
            <option key={option.value} value={option.value} defaultValue={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
        <IconSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path
            fill="none"
            fillRule="evenodd"
            stroke="#A1A1A1"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.045 3.955L10.136 8.052 6.045 12.136"
            transform="rotate(90 7.91 8.045)"
          />
        </IconSVG>
      </SelectBoxWrapper>
      <SelectBoxWrapper>
        <Select onChange={handleChange}>
          <option value="none" disabled selected>
            === 선택 ===
          </option>
          {selected}
        </Select>
        <IconSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path
            fill="none"
            fillRule="evenodd"
            stroke="#A1A1A1"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.045 3.955L10.136 8.052 6.045 12.136"
            transform="rotate(90 7.91 8.045)"
          />
        </IconSVG>
      </SelectBoxWrapper>
      <div>
        {options &&
          options.map((option, idx) => {
            return (
              <BoxItem>
                <Items>
                  <p>{option.text}</p>
                  <DelteBtn onClick={deleteitems}>X</DelteBtn>
                </Items>
                <Box key={idx}>
                  <IncreaseBtn
                    onClick={() => {
                      decreaseCount(idx);
                    }}
                  >
                    -
                  </IncreaseBtn>
                  <p>{changecount[idx]}</p>
                  <button
                    onClick={() => {
                      increaseCount(idx);
                    }}
                  >
                    +
                  </button>
                  <p>{option.sum}</p>
                </Box>
              </BoxItem>
            );
          })}
      </div>
      <TotalSum>총 상품금액</TotalSum>

      {sum}
      <Tab />
    </Wrapper>
  );
}
const SelectBoxWrapper = styled.div`
  display: flex;
`;
const Wrapper = styled.div``;
const BoxItem = styled.div`
  flex-direction: column;
  background-color: grey;
  margin: 10px;
`;
const Box = styled.div`
  display: flex;
`;
const Items = styled.div`
  display: flex;
`;
const DelteBtn = styled.button`
  border-radius: 100%;
  margin: 15px 10px;
  margin-left: 800px;
`;
const IncreaseBtn = styled.button`
  /* border-radius: 10px; */
`;

const TotalSum = styled.div`
  margin: 50px 10px;
`;

export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 80%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: red;
  }
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;
export default ProductDetail;
