import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useInputs from '../../hooks/useInputs';
import Data from '../../data/data.json';
import {
  DeliveryData,
  Font,
  Form,
  Img,
  Input,
  InputCheck,
  Label,
  OrderDataWrapper,
  OrderFormContainer,
  PaymentBtn,
  PaymentFormWrapper,
  PaymentMethodData,
  PriceData,
  ProductData,
  Select,
  UserData,
} from './Order.style';

const OrderForm = () => {
  let [items] = useState(Data.products);
  let { id } = useParams();

  const OPTIONS = [
    { value: '', name: '배송 메모를 선택해주세요.' },
    { value: '배송 전에 미리 연락 바랍니다.', name: '배송 전에 미리 연락 바랍니다.' },
    { value: '부재시 경비실에 맡겨주세요.', name: '부재시 경비실에 맡겨주세요.' },
    { value: '부재시 전화나 문자를 남겨주세요.', name: '부재시 전화나 문자를 남겨주세요.' },
    { value: '부재시 문 앞에 놔주세요.', name: '부재시 문 앞에 놔주세요.' },
  ];

  const navigate = useNavigate();
  const [orderData, onChangeOrderData] = useInputs({
    orderName: '',
    phoneNumber: '',
    Email: '',
    receiverName: '',
    receiverPhone: '',
    adress: '',
    adressDetail: '',
  });
  const [paymentMethod, onChangePaymentMethod] = useInput(false);

  const {
    orderName,
    phoneNumber,
    Email,
    receiverName,
    receiverPhone,
    adress,
    adressDetail,
    selet,
  } = orderData;

  const NameValid = orderName.length >= 1 && receiverName.length >= 1;
  const phoneNumberValid = phoneNumber.length >= 5 && receiverPhone.length >= 5;
  const EmailValid = Email.includes('@') && Email.length >= 5;
  const adressValid = adress.length >= 5 && adressDetail.length >= 5;

  const handlerOnSubmit = e => {
    e.preventDefault();
    if (NameValid && phoneNumberValid && EmailValid && adressValid && paymentMethod) {
      alert('결제 완료');
      navigate('/');
    } else if (!NameValid) {
      alert('한 글자 이상 이름을 입력해주세요.');
    } else if (!phoneNumberValid) {
      alert('다섯 글자 이상 번호를 입력해주세요.');
    } else if (!adressValid) {
      alert('다섯 글자 이상 주소를 입력해주세요.');
    } else if (!paymentMethod) {
      alert('결제 수단을 선택해주세요.');
    }
  };
  return (
    <Form onSubmit={handlerOnSubmit}>
      <OrderFormContainer>
        <OrderDataWrapper>
          <ProductData>
            <Font size="larger" weight="bold">
              주문 상품 정보
            </Font>
            <div className="productContainer">
              <div className="imgDataWrap">
                <Img src={items[id].url} alt="상품 이미지" />
                <div>
                  <Font>{items[id].name}</Font>
                  <Font size="small">{items[id].salesList[0].title}</Font>
                  <Font size="medium" weight="bold">
                    {items[id].price}원
                  </Font>
                </div>
              </div>
              <div className="deliveryWrap">배송비 3500원</div>
            </div>
          </ProductData>
          <UserData>
            <Font size="larger" weight="bold">
              주문자 정보
            </Font>
            <div className="userInputContainer">
              <div className="inputTopWrap">
                <Input
                  type="text"
                  name="orderName"
                  placeholder="이름"
                  value={orderName}
                  onChange={onChangeOrderData}
                />
                <Input
                  type="text"
                  name="phoneNumber"
                  placeholder="연락처"
                  value={phoneNumber}
                  onChange={onChangeOrderData}
                />
              </div>
              <div className="inputBottomWrap">
                <Input
                  width="27.4rem"
                  type="email"
                  name="Email"
                  placeholder="이메일(선택)"
                  value={Email}
                  onChange={onChangeOrderData}
                />
              </div>
            </div>
          </UserData>
          <DeliveryData>
            <Font size="larger" weight="bold">
              배송 정보
            </Font>
            <p>
              <InputCheck type="checkbox" id="userSameCheck" />
              <label id="userSameCheck" htmlFor="userSameCheck"></label>
              <span>주문자 정보와 동일</span>
            </p>
            <div className="inputWrapper">
              <div className="inputTopWrap">
                <Input
                  type="text"
                  name="receiverName"
                  placeholder="수령인"
                  value={receiverName}
                  onChange={onChangeOrderData}
                />
                <Input
                  type="text"
                  name="receiverPhone"
                  placeholder="연락처"
                  value={receiverPhone}
                  onChange={onChangeOrderData}
                />
              </div>
              <div>
                <Input type="text" name="postalCode" placeholder="우편번호" />
              </div>
              <div className="inputTopWrap">
                <Input
                  width="27.4rem"
                  type="text"
                  name="adress"
                  placeholder="주소"
                  value={adress}
                  onChange={onChangeOrderData}
                />
              </div>
              <Input
                width="27.4rem"
                type="text"
                name="adressDetail"
                placeholder="상세주소"
                value={adressDetail}
                onChange={onChangeOrderData}
              />
              <Font size="medium" weight="bold">
                배송 메모
              </Font>
              <Select value={selet} onChange={onChangeOrderData}>
                {OPTIONS.map(option => (
                  <option key={option.value} value={option.value} defaultValue={option.value}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </div>
          </DeliveryData>
        </OrderDataWrapper>
        <PaymentFormWrapper>
          <PriceData>
            <Font size="larger" weight="bold">
              결제 요약
            </Font>
            <div className="pricesWrap">
              <div>
                <Font size="medium">상품 가격</Font>
                <Font size="medium">{items[id].price}원</Font>
              </div>
              <div>
                <Font size="medium">배송비</Font>
                <Font size="medium">+3,500원</Font>
              </div>
            </div>
            <div className="totalPrice">
              <Font weight="bold" size="medium">
                총 주문금액
              </Font>
              <Font weight="bold" color="#D2D79F">
                {Number(items[id].price) + 3500}원
              </Font>
            </div>
          </PriceData>
          <PaymentMethodData>
            <Font size="larger" weight="bold">
              결제 수단
            </Font>
            <div className="PaymentMethodWrap">
              <div>
                <input
                  type="radio"
                  id="card"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={onChangePaymentMethod}
                />
                <Label htmlFor="card">신용 카드</Label>
              </div>
              <div>
                <input
                  type="radio"
                  value="money"
                  id="money"
                  checked={paymentMethod === 'money'}
                  onChange={onChangePaymentMethod}
                />
                <Label htmlFor="money">무통장 입금</Label>
              </div>
            </div>
          </PaymentMethodData>
          <PaymentBtn type="submit">결제하기</PaymentBtn>
        </PaymentFormWrapper>
      </OrderFormContainer>
    </Form>
  );
};

export default OrderForm;
