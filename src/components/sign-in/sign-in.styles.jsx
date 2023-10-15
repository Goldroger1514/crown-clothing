import styled, { css } from 'styled-components'
let subColor = 'grey'
let mainColor = 'black'
let shrinkLabelMixin = css`
  top: -15px;
  font-size: 13px;
  color: ${mainColor};
`
export let Title = styled.div`
  h2 {
    margin: 0 auto 5px
  }
  p {
    margin: 0;
  }
`
export let Label = styled.label`
    position: absolute;
    transition: .3s;
    top: 20px;
    color: ${subColor};
    pointer-events:none;
    ${(props) => {
    let { className } = props
    return className && shrinkLabelMixin
  }}
`
export let Input = styled.input`
  border: none;
  border-bottom: 1px solid ${mainColor};
  display: block;
  width: 380px;
  margin: auto;
  outline: none;
  padding: 10px 2px;
  font-size: 20px;
  color:grey;
  &:focus+ ${Label}{
    ${shrinkLabelMixin}
    }
`
export let InputLabel = styled.div`
position: relative;
margin-bottom: 35px;
margin-top: 25px;

}
`