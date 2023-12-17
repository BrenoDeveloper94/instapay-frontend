import styled from "styled-components";

const ContainerPayments = styled.header`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

section {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;

    h2 {
        margin-bottom: 20px;
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
    section {
        width: 79%;
    }
}

`


export default ContainerPayments