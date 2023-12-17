import styled from "styled-components";

const BoxUsers = styled.section`

padding: 25px;
border-radius: 18px;
background-color: #293145;
margin-bottom: 20px;

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    .see-all {
        font-size: 16px;
        font-weight: 900;
        color:#05f;
    }
}

section {
    display: flex;
    align-items: center;
    margin-top: -20px;
    margin-bottom: 15px;

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

    .profileImg {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin: 0 15px 0 0;
    }
}

.btn-visit {
    background-color: #09f;
    padding: 8px 20px 8px 20px;
    border-radius: 8px;
    color: #fff;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 50px;
}

`

export default BoxUsers