import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    display: grid;
   
    justify-content: center;
   
  }
`;
export const ButtonContainer = styled.div`
  
  @media screen and (max-width: 800px) {
    display: grid;
    gap: 10px;
    justify-content: center;
  }
`;