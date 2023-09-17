import styled from 'styled-components'
export let IconContainer = styled.div`
position:relative;
cursor:pointer;
span{
  position:absolute;
  top:58%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size:10px;
  font-weight:bold;
  pointer-events:none;
  user-select:none;
}
`