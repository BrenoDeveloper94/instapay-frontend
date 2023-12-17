import styled from "styled-components";

const Spinner = styled.div`

width: 20px;
height: 20px;
border-radius: 20px;
border: 5px solid #adb5bd;
border-top-color: #4d5774; 
animation: spin 1s linear infinite;

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


`

export default Spinner