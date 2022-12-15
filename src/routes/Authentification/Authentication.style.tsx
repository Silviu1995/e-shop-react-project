import styled from 'styled-components'

export const AuthContainer = styled.div`
display: flex;
justify-content: space-between;
width: 900px;
margin: 30px auto;
@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
  }
`
