import styled from "styled-components";

const BoxAbout = styled.section`

padding: 25px;
border-radius: 18px;
background-color: #293145;
margin-bottom: 20px;

h4 {
    font-size: 20px;
}

p {
    color: #DDDDDD;
    font-size: 14px;
    font-family: sans-serif;
    line-height: 1.7;
    margin-top: 20px;
    margin-bottom: 20px;
}
hr {
    background-color: #adb5bd;
    width: 100%;
    margin-bottom: 15px;
    height: 1px;
    border: none;
}
.box-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

    span {
        font-size: 30px;
        margin-right: 12px;
        color: #adb5bd;
    }
}
h5 {
    font-size: 16px;
    font-weight: bold;
}
.link {
    display: flex;
    align-items: center;

    a {
        cursor: pointer;
        color: #adb5bd;
        font-size: 14px;
        font-family: sans-serif;
    }

    i {
        margin-left: 10px;
        color: #adb5bd;
    }
}

`


export default BoxAbout