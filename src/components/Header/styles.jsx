import styled from "styled-components"

export const Container = styled.div`
  background: ${(props) => (props.pagePokemon ? props.color : "#121212")};
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  z-index: 2;

  .logo {
    width: min-content;
    h1 {
      color: #fff;
    }
  }

  .open-menu-icon {
    display: none;
    @media (max-width: 750px) {
      display: ${(props) => (props.openMenu ? "none" : "flex")};
    }
  }

  @media (max-width: 750px) {
    padding: ${(props) => (props.openMenu ? "0" : "0 50px")};
    flex-direction: ${(props) => props.openMenu && "column"};
    align-items: ${(props) => props.openMenu && "flex-end"};
  }
`

export const Nav = styled.ul`
  width: 50%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;

  .close-menu-icon {
    display: none;
    @media (max-width: 750px) {
      display: ${(props) => (props.openMenu ? "none" : "flex")};
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 100vh;
    gap: 20px;
    display: ${(props) => (props.openMenu ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    background-color: blue;
    z-index: 10;
    padding: 50px 0;
  }
`

export const NavLink = styled.p`
  text-decoration: none;
  color: #fff;
  display: flex;
  animation: 0.5s linear;
  cursor: pointer;

  @media (max-width: 750px) {
    font-size: 30px;
  }
`

export const SearchDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media (max-width: 750px) {
    height: auto;
  }
`

export const SearchDivIcon = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    font-size: 25px;
  }
`
