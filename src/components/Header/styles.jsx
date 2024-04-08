import styled, { keyframes } from "styled-components"

const showMenu = keyframes`
  from {
    opacity: 0;
    width: 0;
  }

  to{
    opacity: 1;
    width: 90%;
  }
`

const closeMenu = keyframes`
  from{
    opacity: 1;
    width: 90%;
  }

  to{
    opacity: 0;
    width: 0%;
  }
`

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
    cursor: pointer;
    display: ${(props) => (props.openMenu ? "none" : "flex")};
    h1 {
      color: #fff;
    }
  }

  .open-menu-icon {
    display: none;
  }

  @media (max-width: 750px) {
    padding: ${(props) => (props.openMenu ? "0" : "0 50px")};
    flex-direction: ${(props) => props.openMenu && "column"};
    align-items: ${(props) => props.openMenu && "flex-end"};

    .open-menu-icon {
      display: ${(props) => (props.openMenu ? "none" : "flex")};
    }
  }
`

export const Nav = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;

  .link-active {
    color: red;
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 100vh;
    gap: 25px;
    display: ${(props) => (props.openMenu ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    background-color: #121212;
    padding: 50px 0;
    animation: ${(props) => (props.openMenu ? showMenu : closeMenu)} 0.2s linear;
    z-index: 10;
  }
`

export const NavLink = styled.p`
  text-decoration: none;
  color: #fff;
  display: flex;
  animation: 0.5s linear;
  cursor: pointer;

  &:hover {
    color: #ff6565;
  }

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
