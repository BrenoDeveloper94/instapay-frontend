import styled from "styled-components";

const ContainerUsers = styled.main`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

section {
    background-color: #293145;
    border-radius: 7px;
    width: 100%;
    display: flex;
    justify-content: center;

    p {
        margin: 20px;
    }
}

header {
    background-color: #293145;
    display: flex;
    align-items: center;
    height: 100px;
    justify-content: space-between;
    border-radius: 7px;
    margin-bottom: 18px;
    width: 100%;

    h2 {
        margin-left: 20px;
        font-family: sans-serif;
        font-size: 22px;
        font-weight: 600;
    }

    div {
        display: flex;
        align-items: center;
        margin-right: 20px;

        input {
            padding: 15px;
            border-radius: 5px;
            border: none;
            background-color: #333333;
            color: #adb5bd;
            font-size: 14px;
            font-family: sans-serif;
        }

        .icon-filter {
            background-color: #1A2236;
            padding: 12px;
            border-radius: 5px;
            margin-left: 10px;
            color: #adb5bd;
            cursor: pointer;
        }
    }
}
main {
    border-radius: 7px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
}

@media screen and (min-width: 792px) {
    main {
        flex-direction: row;
        flex-wrap: wrap;
    }
}


@media screen and (min-width: 992px) {
    width: 85%;

    header {
        width: 100%;

        h2 {
            margin-left: 50px;
            font-size: 25px;
            font-weight: 800;
        }
        div {
            margin-right: 50px;
        }
    }

    main {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
}

`

export default ContainerUsers