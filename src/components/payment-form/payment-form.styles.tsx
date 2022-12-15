import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
 
  @media screen and (max-width: 800px) {
    min-width: 50vh;
  }
 
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    margin-top: 30px;
    margin-left: 0 auto;
  }
`;
