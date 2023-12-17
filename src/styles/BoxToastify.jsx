import { css } from "styled-components"
import styled from '@emotion/styled'


const BoxToastify = styled.section`


position: fixed;
margin-top: 100px;
top: 0;


${({closetoas}) =>{
    return closetoas == 'false' ?
    css`display: none;`
    :
    css`display: flex; width: 100%;`
}}

.toastify-content {
    width: 90%;
    background-color: #23c042;
    margin-bottom: 40px;
    border-radius: 5px;
    display: flex;
    margin-left: -20px;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 4px 1px #616060;
    animation-duration: 0.5s;

    .icon-close {
        text-align: right;
        margin: 3px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
    }
    .message-content {
        display: flex;
        align-items: center;
        margin-bottom: 19px;

        .icon-message {
            margin: 0 10px 0 20px;
            font-weight: 500;
            font-size: 27px;
            background-color: #fff;
            color: #23c042;
            border-radius: 27px;
        }
    }
    span {
        text-align: left;
        font-family: sans-serif;
        color: #fff;
    }
    .progress {
        background-color: #fff;
        border-radius: 0 0 0 5px;
        height: 6px;
        animation-name: progressAnimation;
        animation-duration: 5s;
        width: 0%;
    }
}

@keyframes toastifyAnimation {
    to{
        margin-right: 0;
    }
    from{
        margin-right: -1000px;
    }
}

@keyframes progressAnimation {
    0%{
        width: 100%;
    }
    100%{
        
        width: 0%;
    }
}

@media screen and (min-width: 992px) {
    justify-content: right;
    width: 50%;
    right: 0;

    .toastify-content {
        margin-right: 30px;
        width: 50%;
    }

    @keyframes toastifyAnimation {
    to{
        margin-left: 40px;
    }
    from{
        margin-left: -1000px;
    }
}
}

`


export default BoxToastify