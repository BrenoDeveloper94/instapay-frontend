import { css } from "styled-components"
import styled from '@emotion/styled'

const BoxNotifications = styled.div`

background-color: #1d253a;
border-radius: 15px;
position: absolute;
width: 300px;
right: 0;
margin-right: 90px;
padding: 0 0 10px 30px;
overflow: auto;
cursor: auto;

${({activestylenotifications}) => {
    return activestylenotifications == 'true'
    ?
    css`
    height: 350px;
    transition: height 0.5s;
    `
    :
    css`
    height: 0px;
    opacity: 0;
    `
}}

h4 {
    font-size: 18px;
    font-family: sans-serif;
    color: #fff;
    margin: 30px 0 30px 0;
}

> div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            span {
                font-size: 16px;
                font-weight: bold;
                margin: 0 0 5px 10px;
                color: #fff;
            }
            small {
                font-size: 12px;
                margin: 0 15px 0 0;
                color: #fff;
            }
        }
        p {
            font-size: 14px;
            margin: 0 0 0 10px;
            color: #fff;
        }
    }
}

.profileImg {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}

@media screen and (min-width: 992px) {
    
}


`

export default BoxNotifications