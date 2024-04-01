import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  padding-top: 10vh;
  background-color: #121212;

  .title {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

    h1 {
      color: #fff;
    }
  }
`

export const FavoritesPokemons = styled.div`
  width: 100vw;
  height: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
  }
`
