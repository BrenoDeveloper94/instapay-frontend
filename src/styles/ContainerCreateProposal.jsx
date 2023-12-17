import styled, { css } from "styled-components";


const ContainerCreateProposal = styled.section`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

header {
    background-color: #293145;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 7px;
    margin-bottom: 18px;
    width: 100%;
}

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
h2 {
    margin: 35px 0 0 20px;
}
section {
    padding: 10px 20px 20px 20px;

    form {
        width: 100%;
        display: flex;
        overflow-x: hidden;
        scroll-behavior: smooth;
        overflow-y: hidden;

        .content-inputs {
            min-width: 100%;
        }
        .content-influencers {
            min-width: 99%;

            .subtitle-influencers {
                font-size: 15px;
                color: #fff;
                padding-top: 20px;
            }

            .content-base-users {
                width: 100%;
                max-height: 360px;
                overflow: auto;
            }

            article {

                label {

                    input[type=checkbox] ~ div {
                        padding: 15px 0 15px 0;
                        border-radius: 7px;
                        border: solid 2px #adb5bd;
                        cursor: pointer;
                    }

                    input[type=checkbox] {
                        display: none;
                    }

                    input[type=checkbox]:checked ~ div {
                        background-color: #202534;
                        border: solid 2px #0055FF;
                    }

                    .container-users {
                        display: flex;

                        .profileImg {
                            width: 45px;
                            height: 45px;
                            border-radius: 45px;
                            margin: 0 10px 0 10px;
                            border: solid 4px #0055FF;
                        }

                        div {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            span {
                                font-size: 16px;
                                font-weight: 800;
                                color: #fff;
                            }
                            small {
                                font-size: 14px;
                                color: #adb5bd;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
            
        }

        .content-submit {
            min-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

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

        .input-create-proposal {
            background-color: #333333;
            width: 99%;
            height: 40px;
            border-radius: 5px;
            margin: 5px 0 5px 0;
            border: solid 2px #0055FF;
            padding-left: 15px;
            color: #fff;
            font-size: 18px;

        }
    }

    .content-buttons {
        width: 99%;
        display: flex;
        justify-content: right;
    
        a {
            display: flex;
            align-items: center;
            color: #fff;
            font-family: sans-serif;
            padding-top: 10px;
            margin: 0 0 0 25px;

            span {
                background-color: #0575e6;
                font-size: 25px;
                border-radius: 25px;
                margin: 0 5px 0 5px;
            }
        }
    }
}

@media screen and (min-width: 992px) {
    header {
        width: 79%;
    }
}

`



export default ContainerCreateProposal