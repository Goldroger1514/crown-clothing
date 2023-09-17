import styled from 'styled-components'
export let BackgroundImage = styled.div`
position:absolute;
width:100%;
height:100%;
background-image:${({ src }) => `url(${src})`};
background-repeat:no-repeat;
background-position:center;
transition:1s;
`
export let Info = styled.div`
position:absolute;
top:50%;
left:50%;
width:150px;
height:100px;
transform:translate(-50%,-50%);
background-color:white;
opacity:.7;
text-align:center;
transition:.3s
cursor:pointer;
`
