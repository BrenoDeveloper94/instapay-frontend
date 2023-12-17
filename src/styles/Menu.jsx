import styled from "styled-components"


const Menu = styled.section`

background-color: #2b3348;
width: 90%;
margin-top: 10px;
padding-top: 15px;
padding-bottom: 15px;
border-radius: 12px;

small {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #ADB5BD;
    margin-left: 25px;
}

div {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 0;
    cursor: pointer;

    i {
        color: white;
        margin: 0px 15px 0px 25px;
        width: 45px;
        height: 45px;
        border-radius: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-work {background: linear-gradient(to right, #0575e6, #021b79) !important;}
    .icon-account_balance {background: linear-gradient(to right, #e44d26, #f16529) !important;}
    .icon-payments {background: linear-gradient(to right, #f2994a, #f2c94c) !important;}
    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        color: #DDDDDD;
        font-size: 15px;
    }
}


@media screen and (min-width: 992px) {
    
}

`

export default Menu