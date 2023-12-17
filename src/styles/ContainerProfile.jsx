import styled from "styled-components";

const ContainerProfile = styled.header`

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
    border-radius: 18px;
    margin-bottom: 18px;
    width: 100%;

    .box-banner {
        height: 240px;
        width: 95%;
        margin: 15px;
        border-radius: 18px;

        .profile-banner {
            width: 100%;
            height: 100%;
            border-radius: 18px;
        }
    }
    section {
        width: 90%;
        display: flex;
        align-items: end;
        margin-top: -40px;
        margin-bottom: 25px;

        .box-info {
            width: 80%;
            display: flex;

            .profileImg {
                width: 100px;
                height: 100px;
                border-radius: 100px;
                margin: 0 20px 0 0;
                border: solid 5px #fff;
            }
            div {
                display: flex;
                flex-direction: column;
                justify-content: end;

                span {
                    font-size: 20px;
                    font-family: sans-serif;
                    font-weight: 900;
                    color: #fff;
                    margin-bottom: 5px;
                }
                small {
                    font-size: 14px;
                    font-family: sans-serif;
                    color: #adb5bd;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
            }
        }
        .box-icon {
            display: flex;
            width: 20%;
            justify-content: right;
            
            i {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                background-color: #F5F5F5;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #212529;
            }
        }
    }
    hr {
        background-color: #adb5bd;
        width: 100%;
        margin-bottom: 50px;
        height: 1px;
        border: none;
    }

}

main {
    border-radius: 7px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
}

@media screen and (min-width: 992px) {
    header {
        width: 79%;

        section {
            .box-info {
                div {
                    span {
                        font-size: 26px;
                    }
                }
            }
        }

        div {
            width: 97%;
        }
    }
    main {
        flex-direction: row;
        justify-content: center;
    }
}

`


export default ContainerProfile