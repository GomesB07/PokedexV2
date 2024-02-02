import styled from "styled-components"

export const Container = styled.div`
  background: ${(props) => props.color};
  width: 100vw;
  min-height: 90vh;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  padding-top: 10vh;
`

export const NameAndId = styled.div`
  width: 100%;
  min-height: 10vh;
  height: auto;
  display: flex;
  flex-direction: row;

  .div-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    p {
      font-size: 30px;
      color: #fff;
      font-weight: 700;
      margin-left: 40px;
    }

    h3 {
      font-size: 50px;
      color: #fff;
      text-transform: capitalize;
      font-weight: 800;
      margin: auto;
    }
  }

  .div-types-pokemon {
    display: flex;
    padding: 0 20px;
    position: absolute;
    right: 0;
  }

  @media (max-width: 750px) {
    padding: 0;
    flex-direction: column;

    .div-name {
      width: 75%;
      justify-content: space-around;
      padding: 0;

      h3 {
        font-size: 30px;
      }
    }

    .div-types-pokemon {
      width: 100%;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 390px) {
    .div-name {
      background-color: red;
      width: 100%;
      padding: 0;
    }
    .div-types-pokemon {
      margin-top: 30px;
    }
  }
`

export const SectionInfos = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export const PokeImgDiv = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 70%;
  }

  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const PokeInfoDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .div-stats {
    width: 80%;
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    .stats-tittle {
      font-size: 30px;
      display: block;
      text-align: center;
      color: #fff;
      text-transform: capitalize;
    }

    .stats {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;

      h2 {
        font-size: 20px;
        color: #fff;
        width: 50%;
      }

      .wrapper {
        width: 50%;
      }
    }
  }

  @media (max-width: 750px) {
    width: 100%;

    .div-stats {
      width: 95%;
    }
  }
`
export const SectionEvolution = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: center;

  .evolution-div {
    width: 80%;
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    .evolution-title-div {
      width: 100%;
      height: 5vh;
      text-align: center;

      p {
        color: #fff;
        font-size: 25px;
        font-weight: 800;
      }
    }

    .pokemons-evolution-div {
      width: 100%;
      height: min-content;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .pokemon-div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;

        img {
          width: 100px;
        }

        p {
          color: #fff;
          font-weight: 500;
          text-transform: capitalize;
        }
      }
    }
  }

  @media (max-width: 325px) {
    .evolution-div {
      margin-top: 100px;

      img {
        width: 50px !important;
      }
    }
  }

  @media (max-width: 750px) {
    margin-top: 30px;

    .evolution-div {
      width: 95%;
      padding: 10px 0;
    }

    .pokemons-evolution-div {
      width: 100%;
    }
  }
`
