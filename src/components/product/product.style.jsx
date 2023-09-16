import styled from 'styled-components'
import Product from './product.component'
export let ProductImg = styled.img`
  width:100%;
  height:95%;
  object-fit:cover;
  margin-bottom:5px;
`
export let ProductInfo = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
export let ProductBtnContainer = styled.div`
position:absolute;
bottom:30px;
width:100%;
button{
  display:none;
  margin:auto;
}
`

export let ProductCart = styled.div`
height:350px;
position:relative;
&:hover ${ProductImg}{
  opacity:.8;
}
&:hover ${ProductBtnContainer}{
  button{
    display:block;
  }
}
`