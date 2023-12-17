import { css } from "styled-components"
import styled from '@emotion/styled'


const ContainerCheckout = styled.section`


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
form {
    width: 100%;
    padding: 10px 20px 20px 20px;

    span {
        color: #e0dddd;
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
main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .box-form {
        width: 100%;
        padding-top: 20px;
    }
    .box-info {
        width: 100%;
        padding: 20px;
        margin-bottom: 100px;

        .info {
            margin-bottom: 25px;
            padding-top: 20px;

            h2 {
                color: #e0dddd;
                margin-bottom: 5px;
            }
            h3 {
                color: #e0dddd;
                margin-bottom: 5px;
            }

            h4 {
                font-size: 30px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: 900;
                color: #fff;
            }
        }
        .container-card {
            
            .card {
                width: 100%;
                transform-style: preserve-3d;
                height: 230px;
                transition: all 1s;

                ${({card}) => {
                    return card == 'true'
                    &&
                    css`
                    transform: rotateX(180deg);
                    `   
                }}
    
                .front {
                    position: absolute;
                    background-color: #1E74FD;
                    height: 100%;
                    width: 100%;
                    border-radius: 25px;
                    backface-visibility: hidden;
    
                    div {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 25px 0 25px;
                        margin-bottom: 30px;
        
                        .flag-card {
                            width: 70px;
                        }
                        .chip-card {
                            width: 45px;
                            height: 45px;
                        }
                    }
                    .number {
                        font-size: 40px;
                        font-weight: 700;
                        margin-left: 25px;
                    }
                    .name {
                        font-size: 16px;
                        font-weight: 700;
                        margin-left: 25px;
                        margin-bottom: 40px;
                        text-transform: uppercase;
                    }
                    .date {
                        font-size: 15px;
                        font-weight: 700;
                        margin-left: 25px;
                    }
        
                }
                .back {
                    background-color: #1E74FD;
                    height: 100%;
                    width: 100%;
                    border-radius: 25px;
                    position: absolute;
                    backface-visibility: hidden;
                    transform: rotateX(180deg);

                    .faixa {
                        background-color: #322f2f;
                        padding: 30px;
                        margin-top: 30px;
                        margin-bottom: 20px;
                    }
                    .cvv {
                        margin: 20px 0 0 20px;
                        font-size: 20px;
                        font-weight: 600;
                    }
                    .box-cvv {
                        width: 50px;
                        height: 25px;
                        margin: 20px 0 0 20px;
                        background-color: #fff;
                        border-radius: 5px;
                        display: flex;
                        justify-content: center;
                        margin-top: 0;

                        .cvv-number {
                            color: #322f2f;
                            font-size: 20px;
                            font-weight: 600;
                        }
                    }
                    .flag-card-back {
                        float: right;
                        width: 60px;
                        margin-right: 20px;
                    }
                }
            }
        }
        
        
        .container-card:hover .card {
            //transform: rotateX(180deg);

        }
    }
}


@media screen and (min-width: 992px) {
    width: 79%;

    main {
        flex-wrap: wrap;
    
        .box-form {
            width: 50%;
        }
        .box-info {
            width: 50%;
        }
    }
}


`



export default ContainerCheckout