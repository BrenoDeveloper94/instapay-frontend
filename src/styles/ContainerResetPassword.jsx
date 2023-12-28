import styled from "styled-components";

const ContainerResetPassword = styled.section`


display: flex;
justify-content: center;
align-items: center;
background-color: #293145;
padding: 50px 0 50px 0;
position: absolute;
width: 100%;
height: 100vh;

section {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a2236;
    border-radius: 10px;

    h2 {
        font-size: 30px;
        margin: 35px 0 25px 0;
        width: 100%;
        color: #fff;
        display: flex;
        justify-content: center;
    }

    .links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        i {
            margin: 0 5px 0 0;
        }

        span {
            font-size: 18px;
            font-weight: 500;
            color: #fff;
            margin: 20px;
            display: flex;
        }
    
    }
}
form {
    width: 100%;
    padding: 10px 20px 20px 20px;

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
        width: 100%;
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
    }
    i {
        margin: 0 5px 0 0;
    }

    span {
        font-size: 18px;
        font-weight: 500;
        margin-top: 5px;
        display: flex;
    }
    .title-input {
        font-size: 18px;
        color: #fff;
        margin: 15px 0 0 0;
    }
    .mensage-success {
        text-align: center;
        padding: 20px;

        span {
            font-size: 18px;
            color: #fff;
            margin: 15px 0 0 0;
            font-weight: 600;
        }
        i {
            margin-left: 5px;
            font-size: 40px;
            background-color: green;
            border-radius: 40px;
            color: #fff;
        }
    }

}


@media screen and (min-width: 992px) {
    section {
        width: 500px;
    }
}


`



export default ContainerResetPassword