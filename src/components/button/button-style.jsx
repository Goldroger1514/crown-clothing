import styled from 'styled-components'
export let BaseButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-size: 18px;
  background-color: black;
  color: white;
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`
export let GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    border: 1px solid black;
    background-color: #4285f4;
    color: white;
  }
`
export let InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
      background-color: black;
      color: white;
    }
`