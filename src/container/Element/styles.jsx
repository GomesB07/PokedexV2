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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .div-element {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
`
export const DamagesContainer = styled.div`
  width: 80%;
  height: auto;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;

  .damages-title {
    width: 100%;
    height: auto;
    text-align: center;

    h2 {
      color: #fff;
    }
  }

  .div-damages {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .div-damage {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      h2 {
        color: #fff;
      }

      p {
        cursor: pointer;
        text-transform: capitalize;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
