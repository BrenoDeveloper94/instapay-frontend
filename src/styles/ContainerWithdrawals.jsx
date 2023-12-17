import styled from "styled-components";

const ContainerWithdrawals = styled.header`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

header {
    background-color: #293145;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 28px;
    width: 100%;
    padding: 20px 0 20px 0;

    .box-value {
        width: 100%;
        display: flex;
        justify-content: center;

        div {
            background: linear-gradient(to right, #05f, #09f) !important;
            width: 250px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            flex-direction: column;

            small {
                margin-top: -8px;
                margin-bottom: 10px;
            }
            .spinner-value {
                width: 20px;
                height: 20px;
                border-radius: 20px;
                border: 5px solid #adb5bd;
                border-top-color: #4d5774; 
                animation: spin 1s linear infinite;
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            }
        }

    }
    .box-input {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 15px 0 10px 0;
        flex-direction: column;
        align-items: center;

        form {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        
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
                height: 40px;
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
                background: linear-gradient(to right, #09f, #05f) !important;
                cursor: pointer;
            }
            div span {
                color: #05f;
            }
        }
        span {
            font-weight: bold;
            color: #d54747;
            width: 100%;
            display: flex;
            align-items: center;
        }
    }
}
section {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;

    h3 {
        width: 100%;
        text-align: center;
        margin: 30px;
        font-weight: 100;
    }

    article {
        width: 100%;
        border-radius: 5px;
        display: flex;
        background-color: #293145;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px 10px 20px;
        margin-bottom: 5px;

        .div-user {
            display: flex;
            align-items: center;
            width: 150%;

            .profileImg {
                width: 45px;
                height: 45px;
                border-radius: 45px;
                margin: 0 10px 0 0;
                border: solid 2px #0055FF;
            }
            div span {
                font-weight: bold;
                color: #fff;
            }
            
        }
        .div-description {
            width: 50%;
            display: flex;
            justify-content: center;

            i {
                color: #d54747;
                font-size: 30px;
            }
        }
        span {
            font-weight: bold;
            color: #d54747;
            width: 100%;
            display: flex;
            justify-content: center;
        }
        small {
            color: #fff;
            font-weight: bold;
            width: 100%;
            display: flex;
            justify-content: right;
        }
    }
}



@media screen and (min-width: 992px) {

    header {
        width: 79%;
        flex-direction : row;
        
        .box-value {
            width: 40%;
            justify-content: left;
            padding-left: 30px;
        }
        .box-input {
            width: 60%;
            justify-content: right;
            padding-right: 30px;
            margin: 0;
            align-items: start;

            form {
                flex-direction: row;
                margin: 0;

                .inputstyle {
                    width: 70%;
                }
                button {
                    width: 30%;
                    margin: 0 0 0 10px;
                }
            }
        }
    }
    section {
        width: 79%;
    }
}

`


export default ContainerWithdrawals