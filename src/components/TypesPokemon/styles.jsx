import styled from "styled-components"

export const Container = styled.div`
  width: ${(props) => (props.elementsPage ? "100vw" : "min-content")};
  height: ${(props) => (props.elementsPage ? "auto" : "10vh")};
  min-height: ${(props) => (props.elementsPage ? "100vh" : "0")};
  background-color: ${(props) => (props.elementsPage ? "#121212" : "")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.elementsPage ? "center" : "flex-end")};
  flex-flow: ${(props) => props.elementsPage && "row wrap"};
  gap: 20px;
  padding-top: ${(props) => (props.elementsPage ? "10vh" : "0")};
`

export const Type = styled.div`
  width: ${(props) =>
    props.elementsPage || props.elementPage ? "250px" : "100px"};
  height: ${(props) =>
    props.elementsPage || props.elementPage ? "80px" : "50px"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.elementPage ? "transparent" : props.color};
  box-shadow: 0 8px 32px 0
    ${(props) => (props.elementPage ? props.color : "rgba(31, 38, 135, 0.37)")};
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: ${(props) =>
    props.elementPage
      ? `2px solid ${props.color}`
      : "1px solid rgba(255, 255, 255, 0.18)"};

  h2 {
    color: ${(props) => (props.elementPage ? props.color : "#fff")};
    text-transform: capitalize;
  }

  @media (max-width: 750px) {
    width: ${(props) =>
      props.elementsPage || props.elementPage ? "250px" : "80px"};
    height: ${(props) =>
      props.elementsPage || props.elementPage ? "80px" : "30px"};

    h2 {
      font-size: 15px;
    }
  }
`
