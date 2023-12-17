import styled from "styled-components";

const Spinner = styled.div`

width: 100px;
height: 100px;
border-radius: 100px;
border: 20px solid #1a2236;
border-top-color: #323b57; 
animation: spin 1s linear infinite;
margin: 20px 0 20px 0;

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


`

export default Spinner