import styled from "styled-components"

export const Container = styled.div`
  font-family: "VT323", monospace;
  width: 100vw;
  min-height: 90vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-image: url(https://i.pinimg.com/originals/2b/3b/04/2b3b04771ccca26c3dd96d781b0117ca.jpg);
  background-size: cover;
  background-position: center;
  padding-top: 10vh;

  div {
    height: min-content;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 50px;
      color: #fff;
    }
    p {
      margin-top: 20px;
      color: #fff;
    }
  }

  button {
    width: 200px;
    height: 50px;
    background-color: yellow;
    border: 1px solid #fff;
    border-radius: 8px;
    cursor: pointer;
  }
`
