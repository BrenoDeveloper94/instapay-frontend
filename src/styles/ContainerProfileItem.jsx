import styled from "styled-components"


const ContainerProfileItem = styled.section`

width: 90%;
margin-top: 10px;
padding-top: 15px;
padding-bottom: 15px;

h2 {
    margin: 35px 0 45px 0;
}

section {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 0;
    cursor: pointer;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        margin: 12px 0 12px 0;
        cursor: pointer;
    }

    .iconprimary {
        color: white;
        margin: 0px 15px 0px 0;
        width: 45px;
        height: 45px;
        border-radius: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #0575e6, #021b79) !important;
    }
    .iconsecondary {
        color: #ADB5BD;
        margin: 0px 15px 0px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
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

export default ContainerProfileItem