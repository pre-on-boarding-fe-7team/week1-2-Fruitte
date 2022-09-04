import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;

  & textarea {
    width: 100%;
  }

  & label {
    // flex: 0 0 100%;
    max-width: 100%;
  }

  & input {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export default Container;
