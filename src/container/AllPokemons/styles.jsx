import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: min-content;
  min-height: 90vh;
  background-color: #121212;
  padding-top: 10vh;
`

export const DivButtons = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;

  button {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: red;
    color: #7e7e7e;

    &:hover {
      background-color: #ff6565;
    }
  }
`
