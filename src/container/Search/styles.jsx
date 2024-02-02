import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: min-content;
  min-height: 90vh;
  background-color: rebeccapurple;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  padding-top: 10vh;

  .sub-container {
    width: 100%;
    height: 100%;
    background-color: rebeccapurple;
  }
`
export const DivInput = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;

  input {
    width: 80%;
    height: 50px;
    outline: none;
    padding: 0 20px;
  }
`
