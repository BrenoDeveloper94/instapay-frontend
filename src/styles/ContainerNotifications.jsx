import styled from "styled-components";

const ContainerNotifications = styled.header`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

header {
    width: 100%;

    h1 {
        margin-bottom: 40px;
        font-size: 24px;
    }
}

section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 25px;

    .box-user {
        display: flex;
        align-items: center;
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
            border: solid 3px #0055FF;
        }
    }
    article {
        padding: 15px;
        border-radius: 15px;
        background-color: #0055FF;

        p {
            color: #fff;
        }
    }
}


@media screen and (min-width: 992px) {
    section {
        width: 79%;

        article {
            width: 50%;
        }
    }
    header {
        width: 79%;
    }
}

`
    



export default ContainerNotifications