import styled from "styled-components";

const BlockUser = styled.article`

display: flex;
align-items: center;
flex-direction: column;
background-color: #293145;
border-radius: 7px;
width: 100%;
margin: 8px 0 8px 0;
justify-content: center;

.profileImg {
    width: 90px;
    height: 90px;
    border-radius: 90px;
    margin: 35px 0 25px 0;
    border: solid 5px #fff;
}
span {
    font-size: 18px;
    font-weight: 900;
    color: #fff;
    margin-bottom: 5px;
}
small {
    font-size: 14px;
    color: #adb5bd;
    font-weight: 700;
    margin-bottom: 10px;
}

.box-btns {
    display: flex;

    .btn-viewmore {
        background-color: #05f;
        padding: 12px 24px 12px 24px;
        border-radius: 20px;
        color: #fff;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 20px 5px 20px 5px;
    }
}


@media screen and (min-width: 792px) {
    width: 48%;
    margin-right: 1%;
    margin-left: 1%;
}

@media screen and (min-width: 992px) {
    margin-bottom: 10px;
    width: 31%;
    margin-right: 1%;
    margin-left: 1%;
}

`




export default BlockUser