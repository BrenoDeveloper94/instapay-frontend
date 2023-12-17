import styled from "styled-components"


const Nav = styled.nav`

background-color: #293145;
position: fixed;
height: 70px;
width: 100%;
z-index: 1;
display: flex;
animation-name: navAnimation;
animation-duration: 0.5s;

@keyframes navAnimation {
    to{
        height: 70px;
    }
    from{
        height: 0;
    }
}

@media screen and (min-width: 992px) {
    height: 85px;

    @keyframes navAnimation {
        to{
            height: 85px;
        }
        from{
            height: 0;
        }
    }
}

`

export default Nav