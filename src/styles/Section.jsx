import styled from "styled-components"


const Section = styled.section`

width: 100%;
display: flex;
align-items: center;

.logoImg {
    margin-left: 30px;
}

.icon {
    background: #1a2236;
    color: #adb5bd;
    font-size: 30px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin: 0 10px 0 10px;
    cursor: pointer;
    display: none;
}

.mobile {
    color: #1a2236;
    background: #F5F5F5;
    font-size: 30px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    margin: 0 5px 0 5px;
    cursor: pointer;
}

.menu-Icon {
    color: #FFF;
    background: transparent;
    font-size: 50px;
    cursor: pointer;
}

.icon-desktop {
   display: none;
}



@media screen and (min-width: 992px) {

    justify-content: right;

    .logoImg {
        display: none;
    }
    .icon {
        font-size: 30px;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        margin: 0 10px 0 10px;
        display: flex;
    }
    .mobile {
        display: none;
    }

    .menu-Icon {
        display: none;
    }

    .icon-desktop {
        color: #05f;
        background: transparent;
        font-size: 36px;
        cursor: pointer;
        display: block;
        margin: 0 15px 0 15px;

        .number-notifications {
            position: absolute;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            background-color: red;
            width: 20px;
            height: 20px;
            margin-top: -40px;
            margin-left: 19px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

`

export default Section