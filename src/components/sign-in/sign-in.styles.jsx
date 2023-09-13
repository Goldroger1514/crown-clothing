import styled from 'styled-components'
export let Title = styled.div`
  h2 {
    margin: 0 auto 5px
  }
  p {
    margin: 0;
  }
`
export let InputLabel = styled.div`
position: relative;
margin-bottom: 35px;
margin-top: 25px;
input{
  border: none;
  border-bottom: 1px solid black;
  display: block;
  width: 380px;
  margin: auto;
  outline: none;
  padding: 10px 2px;
  font-size: 20px;
  color:grey;
  &:focus+ label{
    top: -15px;
    font-size: 13px;
    color: black;
    }
}
label{
    position: absolute;
    transition: .3s;
    top: 20px;
    color: grey;
    pointer-events:none
}
`