import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #000;
  border-bottom: 2px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 50px;

  .logo {
    width: min-content;
    h1 {
      color: #fff;
    }
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
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  animation: 0.5s linear;
`

export const SearchDiv = styled.div`
  width: ${(props) => (props.searchView ? "80%" : "10%")};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  transition: 0.5s ease-out;

  form {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    display: flex;
    opacity: ${(props) => (props.searchView ? "1" : "0")};

    transition: 0.2s linear;

    .input-search {
      display: flex;
      border: none;
      height: 55%;
      width: 70%;
      padding-left: 15px;
      border-radius: 5px;
      z-index: 10;
      outline: none;
    }

    .input-button {
      width: 80px;
      height: 55%;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`

export const SearchDivIcon = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
