import styled from 'styled-components'
export let CartDropDown = styled.div`
width:300px;
max-height:300px;
overflow:auto;
`
export let CartDropDownContainer = styled.div`
background-color:white;
border:1px solid black;
position:absolute;
top:100%;
padding:10px;
right:10px;
z-index:10;
button{
  width:100%;
  display:block;
  margin:auto;
}
p{
  text-align:center;
  font-size:23px;
}
`