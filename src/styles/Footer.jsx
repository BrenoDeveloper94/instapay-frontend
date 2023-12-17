import styled from "styled-components"


const Footer = styled.footer`

background-color: #09f;
position: fixed;
padding: 12px 0 12px 0;
width: 100%;
z-index: 1;
bottom: 0;
display: flex;
justify-content: space-around;
z-index: 2;

span {
    color: #fff;
    font-size: 2em;
    cursor: pointer;
}

@media screen and (min-width: 992px) {
    display: none;
}

`

export default Footer