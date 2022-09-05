import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../Categorize/Tab';
import { get } from '../../api/api';

function ProductDetail() {
  let [items, setItems] = useState([]);
  let { id } = useParams();

  const getData = async () => {
    const res = await get();
    setItems(res.products);
  };
  useEffect(() => {
    getData();
  }, []);

  const OPTIONS = [
    { value: '배송비(선결제)', name: '배송비(선결제)' },
    { value: '배송비(착불)', name: '배송비(착불)' },
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

    let price = items[id]?.salesList.reduce((accu, cart) => accu + cart.price * 1, 0);

    setOption([..._options, { text: e.target.value, sum: price }]);
    setSum(price);
  };

  const [counter, setCounter] = useState(0);
  const [changecount, setchangecount] = useState([1, 1, 1]);

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

  return (
    <Wrapper>
      <div>
        <RightSide>
          <div>
            <Img src={items[id]?.url} />
          </div>
          <Right>
            <Title>{items[id]?.name}</Title>
            <SaleBtn>SALE</SaleBtn>
            <BestBtn>BEST</BestBtn>
            <Middle>
              <Price>{items[id]?.price}원</Price>
              <SalePrice>{items[id]?.salePrice}원</SalePrice>
            </Middle>
            <hr />
            <p>미생물을 이용한 친환경 농볍으로 걸러 더욱 맛있는 국내산 친환경 생 아스파라거스</p>
            <div>
              <Origin>원산지 강원도 화천군</Origin>
            </div>
            <div>
              <Origin>배송방법 택배</Origin>
            </div>
            <div>
              <Origin>배송비 4,000원(40,000원 이상 무료배송)</Origin>
            </div>

            <SelectBoxWrapper>
              <Select onChange={배송}>
                {OPTIONS.map(option => (
                  <option key={option.value} value={option.value} defaultValue={option.value}>
                    {option.name}
                  </option>
                ))}
              </Select>
              <IconSVG
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
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
              <IconSVG
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
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
                    <BoxItem key={idx}>
                      <Items>
                        <TextItem>
                          <p>{option.text}</p>
                        </TextItem>
                        <DelteCon>
                          <DelteBtn onClick={deleteitems}>X</DelteBtn>
                        </DelteCon>
                      </Items>
                      <Box key={idx}>
                        <IncreaseBtn
                          onClick={() => {
                            decreaseCount(idx);
                          }}
                        >
                          -
                        </IncreaseBtn>
                        <Input type="text" value={changecount[idx]}></Input>
                        <DecreaseBtn
                          onClick={() => {
                            increaseCount(idx);
                          }}
                        >
                          +
                        </DecreaseBtn>
                      </Box>
                    </BoxItem>
                  );
                })}

              <TotalSum>
                총 상품금액 ({changecount[0] + changecount[1] + changecount[2]}개) :
                {sum * (changecount[0] + changecount[1] + changecount[2])} 원
              </TotalSum>
              <BtnState>
                <BuyBtn>구매하기</BuyBtn>
                <CartBtn>장바구니</CartBtn>
                <HartBtn>♡</HartBtn>
              </BtnState>
              <ButtomBtn>
                <NaverPay>N pay 구매하기</NaverPay>
              </ButtomBtn>
            </div>
          </Right>
        </RightSide>
      </div>

      <Tab />
    </Wrapper>
  );
}
const SelectBoxWrapper = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;
`;
const BoxItem = styled.div`
  flex-direction: column;
  background-color: #f4f4f4;
  margin: 10px 0;
  height: 100%;
`;
const Box = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Middle = styled.div`
  display: flex;
`;
const Price = styled.p`
  font-size: 20px;
  color: green;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 25px;
`;
const SalePrice = styled.p`
  font-size: 15px;
  margin-top: 3px;
  text-decoration: line-through;
`;

const Origin = styled.p`
  font-size: 10px;
  margin: 15px 0;
`;
const Items = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const TextItem = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const Right = styled.div`
  width: 500px;
`;

const BtnState = styled.div`
  display: flex;
  justify-content: center;
`;

const DelteCon = styled.div``;
const DelteBtn = styled.button`
  border-radius: 100%;
  margin-left: 30px;
  margin-top: 10px;
  padding: 0;
`;
const BuyBtn = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px 24px;
  margin-right: 10px;
  background-color: #4c9c2e;
  color: white;
`;

const CartBtn = styled.button`
  padding: 5px 24px;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 5px 24px;
  margin-right: 10px;
`;

const HartBtn = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 5px 24px;
`;
const NaverPay = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px 50px;
  background-color: #00c737;
`;

const Img = styled.img`
  width: 450px;
  margin-right: 100px;
`;
const IncreaseBtn = styled.button`
  border: 1px solid black;
`;
const DecreaseBtn = styled.button`
  border: 1px solid black;
`;

const SaleBtn = styled.button`
  background-color: red;
  color: white;
  border: 1px solid gray;
  margin: 10px 5px;
`;
const BestBtn = styled.button`
  background-color: white;
  color: red;
  border: 1px solid gray;
`;

const TotalSum = styled.div`
  margin: 50px 10px;
`;

const RightSide = styled.div`
  justify-content: center;
  margin-top: 130px;
  display: flex;
`;
const ButtomBtn = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 20px;
`;

export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  margin-bottom: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: red;
  }
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  margin-bottom: 20px;
  align-self: center;
  width: 24px;
  height: 30px;
`;
export default ProductDetail;
