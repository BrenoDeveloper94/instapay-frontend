import styled from "styled-components";

const BoxProposal = styled.section`

padding: 25px;
border-radius: 18px;
background-color: #293145;
margin-bottom: 20px;
display: flex;
flex-direction: column;

.text-no-proposal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: #DDDDDD;
    font-size: 18px;
    font-family: sans-serif;
}

.btn-create-proposal {
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
    margin-top: 25px;
}

.header-proposal {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.notification-interested {
    background: red;
    position: absolute;
    margin-top: -37px;
    padding: 3px 16px 3px 16px;
    border-radius: 4px;

    span {
        font-weight: bold;
    }
}

div {
    section {
        display: flex;
        text-align: left;
        justify-content: space-between;
        align-items: center;
        width: 100;

        .profileImg {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            margin: 0 15px 0 0;
            border: solid 3px #05f;
        }

        div {
            display: flex;
            flex-direction: column;

            span {
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                margin-bottom: 5px;
            }
            small {
                font-size: 14px;
                color: #adb5bd;
                font-weight: 700;
            }
        }
    
    }
    i {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #212529;
    }
}
p {
    color: #DDDDDD;
    font-size: 14px;
    font-family: sans-serif;
    padding-right: 50px;
    line-height: 1.7;
    margin-top: 20px;
    margin-bottom: 17px;
}
.proposal-photo {
    width: 100%;
    border-radius: 8px;
}

.footer-proposal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    div {
        display: flex;
        align-items: center;

        small {
            font-size: 16px;
            margin-right: 8px;
        }
        span {
            font-size: 18px;
            font-weight: 900;
            color: #fff;
        }
    }
    .btn-viewmore {
        background-color: #05f;
        padding: 8px 20px 8px 20px;
        border-radius: 8px;
        color: #fff;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}

`

export default BoxProposal