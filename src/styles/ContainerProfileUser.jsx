import styled from "styled-components";

const ContainerProfileUser = styled.section`


width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #293145;
border-radius: 7px;


.header-proposal {
    border-radius: 7px;
    background: linear-gradient(to right, #0575e6, #021b79) !important;
    width: 100%;
    display: flex;
    align-items: center;
    height: 80px;

    span {
        font-size: 30px;
        font-weight: 500;
        margin: 0 15px 0 15px;
        color: #fff;
    }
    h4 {
        font-size: 20px;
        font-family: sans-serif;
        color: #fff;
    }
}

section {

    .box-circle-profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        .circle-profile {
            width: 70px;
            height: 70px;
            border-radius: 70px;
            margin-bottom: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
    
            .profileImg {
                width: 70px;
                height: 70px;
                border-radius: 70px;
                border: solid 1px #fff;
            }
        }
    }
}
form {
    width: 100%;
    padding: 10px 20px 20px 20px;

    h2 {
        margin: 35px 0 25px 0;
        right: 0;
        width: 100%;
    }
    .box-input-radio {
        padding: 10px;
        width: 99%;
        display: flex;
        justify-content: center;
        align-items: cente;

        div {
            input[type=radio] {
                margin: 2px;
            }
        }
        
        span {
            font-size: 16px;
            font-weight: 700;
            color: #fff;
            margin-right: 20px;
        }
        
    }
    .inputstyle {
        background-color: #333333;
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin: 5px 0 5px 0;
        border: solid 2px #0055FF;
        padding-left: 15px;
        color: #fff;
        font-size: 18px;
    }
    button {
        height: 50px;
        width: 250px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        font-family: sans-serif;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: linear-gradient(to right, #05f, #09f) !important;
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: 40px;
    }

}


@media screen and (min-width: 992px) {
    width: 79%;
}


`



export default ContainerProfileUser