import styled from "styled-components";

const BoxProposalSingle = styled.section`

padding: 25px 35px 35px 40px;
border-radius: 5px;
background-color: #293145;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;

.box-no-proposal {
    display: flex;
    justify-content: center;
}

.box-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.box-img {
    width: 100%;
    display: flex;
    justify-content: right;

    .profileImg {
        width: 80px;
        height: 80px;
        border-radius: 80px;
        margin: 0 20px 0 0;
        border: solid 5px #09f;
    }
}

h2 {
    font-size: 27px;
    font-weight: bold;
    font-family: sans-serif;
    color: #fff;
    margin-bottom: 25px;
    padding-right: 80px;
    margin-top: -30px;
}
small {
    font-size: 14px;
    color: #adb5bd;
    font-weight: 700;
    margin-bottom: 17px;
}
p {
    color: #DDDDDD;
    font-size: 16px;
    font-family: sans-serif;
    padding-right: 50px;
    line-height: 1.7;
    margin-bottom: 25px;
}
.box-info {
    display: flex;
    align-items: center;

    i {
        background-color: #ffffff;
        height: 35px;
        width: 35px;
        border-radius: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #adb5bd;
        margin-right: 10px;
    }
    span {
        margin-right: 20px;
    }
}
.box-call-to-action {
    display: flex;
    flex-direction: column;
    padding-top: 15px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        font-family: sans-serif;
        margin-right: 30px;
    }
    .box_proposal-accepted {
        display: flex;
        align-items: center;
        padding-top: 15px;

        i {
            margin-left: 5px;
            font-size: 40px;
            background-color: green;
            border-radius: 40px;
        }
    }
    .box_proposal-sell {
        display: flex;
        align-items: center;
        padding-top: 15px;

        i {
            margin-left: 5px;
            padding: 7px;
            font-size: 30px;
            border-radius: 5px;
            background-color: #09f;
        }
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
    }
}

@media screen and (min-width: 1392px) {
    .box-call-to-action {
        flex-direction: row;
        padding-top: 5px;

        .box_proposal-accepted {
            padding: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box_proposal-sell {
            padding: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        button {
            margin: -5px;
        }
    }
}


`


export default BoxProposalSingle