import styled from "styled-components"

export const Container = styled.div`
  background-color: #121212;
`

export const DivInput = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  padding-bottom: ${(props) => (props.filtered ? "50px" : "")};

  input {
    width: 80%;
    height: 50px;
    outline: none;
    padding: 0 20px;
  }
`

export const LoadingPokemons = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
  }
`
