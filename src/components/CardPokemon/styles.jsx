import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  padding: 50px 10px;
  display: flex;
  flex-flow: row wrap;
  gap: 100px;
  justify-content: center;

  .skeleton {
    width: 350px;
    height: 400px;
    border-radius: 8px;
  }

  @media (max-width: 750px) {
    padding: 50px 10px;
    justify-content: space-around;
    gap: 50px;
  }

  @media (max-width: 360px) {
    gap: 30px;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`

export const Pokemon = styled.div`
  background: ${(props) => props.color};

  width: 350px;
  height: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  gap: 20px;
  cursor: pointer;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .pokemon-img {
    width: 80%;
    height: 40%;

    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    display: flex;
    justify-content: center;

    img {
      margin-top: -70px;
      width: auto;
    }
  }

  .pokemon-name {
    color: #fff;
    font-size: 25px;
    font-weight: 800;
    text-transform: capitalize;
  }

  .pokemon-informations {
    width: 80%;
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;

    p {
      color: #fff;
      font-weight: 800;
    }
  }

  @media (max-width: 750px) {
    width: 150px;
    height: 200px;
    gap: 10px;

    .pokemon-img {
      margin: 0;
    }

    .pokemon-name {
      font-size: 12px;
    }

    .pokemon-informations {
      gap: 2px;

      p {
        font-size: 10px;
      }
    }
  }

  @media (max-width: 360px) {
    margin-bottom: 20px;
  }

  @media (max-width: 320px) {
    width: 130px;
    height: 180px;
    margin-bottom: 50px;
  }
`
