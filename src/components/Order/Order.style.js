import styled from 'styled-components';

/* Order.jsx */
export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 90px);
  background: #f3f3f3;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  background: #f3f3f3;
  padding: 150px 50px;
`;

/* OrderForm.jsx */
export const Form = styled.form``;

export const OrderFormContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export const OrderDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PaymentFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 570px;
  height: 250px;
  padding: 30px 30px;
  background-color: white;

  .productContainer {
    width: 100%;
    border: 1px solid #bcbcbc;
  }

  .imgDataWrap {
    display: flex;
    gap: 15px;
    padding: 10px 10px;
    > div {
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
  }

  .deliveryWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #f3f3f3;
    font-size: medium;
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 570px;
  height: 200px;
  padding: 30px 20px;
  background-color: white;

  .userInputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px 10px;
  }

  .inputTopWrap {
    display: flex;
    gap: 8px;
  }

  .inputBottomWrap {
  }
`;

export const DeliveryData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 570px;
  height: 440px;
  padding: 30px 20px;
  background-color: white;

  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 10px 10px;
  }
  .inputTopWrap {
    display: flex;
    gap: 8px;
    font-size: larger;
  }
`;

export const PriceData = styled.div`
  width: 330px;
  height: 200px;
  background-color: white;
  padding: 25px 20px;

  .pricesWrap {
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 35px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  .totalPrice {
    display: flex;
    justify-content: space-between;
  }
`;

export const PaymentMethodData = styled.div`
  width: 330px;
  height: 150px;
  background-color: white;
  padding: 30px 20px;
  .PaymentMethodWrap {
    display: flex;
    padding: 30px 10px;
    gap: 35px;
  }
`;

export const PaymentCheckData = styled.div``;

export const Input = styled.input`
  width: ${props => props.width || '13rem'};
  height: ${props => props.height || '1.8rem'};
  padding-left: 0.5rem;
`;
export const InputCheck = styled.input`
  display: inline-block;
  width: 20px;
  height: 15px;
  border: 2px solid #bcbcbc;
  cursor: pointer;
`;
export const Label = styled.label`
  font-size: medium;
`;

export const Font = styled.p`
  font-size: ${props => props.size || 'large'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || 'black'};
`;

export const Img = styled.img`
  width: 100px;
  height: 80px;
`;

export const PaymentBtn = styled.button`
  width: 330px;
  height: 55px;
  border: 2px solid #bcbcbc;
  font-size: large;
  font-weight: bold;
  color: white;
  background-color: #90b77d;
`;

export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 28.3rem;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  color: inherit;
  background-color: transparent;
`;
