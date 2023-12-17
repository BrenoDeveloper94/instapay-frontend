import styled from "styled-components"


const Main = styled.main`

padding: 10px;
display: flex;
flex-direction: column;
margin-top: 80px;
animation-name: mainAnimation;
animation-duration: 1s;
float: right;
width: 96%;
position: absolute;
padding-bottom: 100px;


@keyframes mainAnimation {
    to{
        width: 98%;
    }
    from{
        width: 0;
    }
}


@media screen and (min-width: 992px) {
    width: 80%;
    float: right;
    flex-direction: row;
    justify-content: center;
    margin-top: 110px;
    position: relative;

    @keyframes mainAnimation {
    to{
        width: 80%;
    }
    from{
        width: 0;
    }
}
}

`

export default Main