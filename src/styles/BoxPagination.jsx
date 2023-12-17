import styled from "styled-components";

const BoxPagination = styled.section`

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0 20px 0;

    p {
        margin: 0 5px 0 5px;
    }

    i {
        background-color: #0575e6;
        font-size: 25px;
        border-radius: 25px;
        margin: 0 5px 0 5px;
        cursor: pointer;
    }
    span {
        background-color: #293145;
        padding: 1px 5px 1px 5px;
        border-radius: 3px;
        font-weight: bold;
        margin: 0 3px 0 3px;
        border: solid 1px #575859;
        cursor: pointer;
    }
}


`


export default BoxPagination