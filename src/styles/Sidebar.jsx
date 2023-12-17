import { css } from "styled-components"
import styled from '@emotion/styled'


const Sidebar = styled.aside`

background-color: #293145;
display: flex;
position: fixed;
height: 100vh;
overflow: auto;
padding-top: 12px;
z-index: 2;
border-right: solid 1px #111;
flex-direction: column;
align-items: center;


${({activestylemenu}) => {
    return activestylemenu == 'true'
    ?
    css`
    transition: width 0.5s;
    width: 280px;
    `
    :
    css`
    width: 0%;
    transition: width 0.5s;
    `
}}


@keyframes sidebarAnimation {
    to{
        width: 280px;
    }
    from{
        width: 0;
    }
}


img {
    margin-bottom: 35px;
}

@media screen and (min-width: 992px) {
    animation-name: sidebarAnimation;
    animation-duration: 0.5s;
    display: flex;
    width: 280px;
    padding-top: 18px;
}

`

export default Sidebar