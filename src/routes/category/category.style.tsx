import styled from 'styled-components'


export const CatContainer = styled.h2`
display: grid;
grid-template-columns: repeat(4,1fr);
column-gap: 20px;
row-gap: 50px;
@media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`

export const CatTitle = styled.div`
font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`
