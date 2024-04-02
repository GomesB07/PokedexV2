import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  gap: 20px;

  img {
    width: 300px;
  }

  h1 {
    color: #fff;
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-direction: column;

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
  }
`
