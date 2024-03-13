import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  padding-top: 10vh;
  background-color: #121212;

  .sub-container {
    width: 100%;
    height: 100%;
    background-color: red;

    .div-element {
      width: 100%;
      height: auto;
      background-color: blue;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
`
