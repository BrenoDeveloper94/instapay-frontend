import styled from "styled-components";

const ContainerThanks = styled.section`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 70px;

i {
    font-size: 100px;
    background-color: green;
    border-radius: 100px;
    color: #fff;
    margin: 30px;
}
h1 {
    font-size: 25px;
    font-weight: 800;
    text-align: center;
}

@media screen and (min-width: 992px) {
    i {
        font-size: 130px;
        background-color: green;
        border-radius: 130px;
        color: #fff;
        margin: 30px;
    }
    h1 {
        font-size: 40px;
        font-weight: 800;
        text-align: center;
    }
}

`


export default ContainerThanks