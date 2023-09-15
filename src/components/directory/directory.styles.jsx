import styled, { css } from 'styled-components'
import { BackgroundImage, Info } from '../category-container/category.styles'
let mixinThree = css`
  flex-basis:calc(95% / 3);
  height:250px;
`
let mixinTwo = css`
  flex-basis:calc(98% / 2);
  height:350px;
`
export let Category = styled.div`
  position:relative;
  overflow:hidden;
  ${(props) => {
    let { info } = props
    if (info == 'three')
      return mixinThree
    else
      return mixinTwo
  }};
  cursor:pointer;
  &:hover ${BackgroundImage}{
    transform:scale(1.1)
  }
  &:hover ${Info}{
    opacity:1
  }
`
export let DirectoryContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
row-gap:10px;
flex-wrap:wrap;
`