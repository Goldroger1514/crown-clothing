import styled from 'styled-components'
export let ItemImage = styled.img`

`
export let ItemQuantity = styled.div`
`
export let ItemContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
*{
  flex-basis:calc(100% / 5)
}
${ItemImage}{
  width:250px;
}
text-align:center;
padding:10px 0;
border-bottom:1px solid grey;
.quantity{
  font-size:20px;
  user-select:none;
}
.dec,.inc,.remove{
  user-select:none;
  cursor:pointer;
  font-weight:bold;
  font-size:20px;
  display:inline-block;
  padding:0 10px;
}
`