import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: red;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #ff6565;
    }
  }
`

export const GoHome = styled.button`
  color: #000;
  &:hover {
    color: red;
  }
`
