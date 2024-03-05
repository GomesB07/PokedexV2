import styled from "styled-components"

export const Container = styled.div`
  width: ${(props) => (props.pagElements ? "100vw" : "min-content")};
  height: ${(props) => (props.pagElements ? "auto" : "10vh")};
  min-height: ${(props) => (props.pagElements ? "100vh" : "0")};
  background-color: ${(props) => (props.pagElements ? "#121212" : "")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.pagElements ? "center" : "flex-end")};
  flex-flow: ${(props) => props.pagElements && "row wrap"};
  gap: 20px;
  padding-top: ${(props) => (props.pagElements ? "10vh" : "0")};
`

export const Type = styled.div`
  width: ${(props) => (props.pagElements ? "250px" : "100px")};
  height: ${(props) => (props.pagElements ? "80px" : "50px")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.color};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h2 {
    color: #fff;
    text-transform: capitalize;
  }

  @media (max-width: 750px) {
    width: ${(props) => (props.pagElements ? "250px" : "80px")};
    height: ${(props) => (props.pagElements ? "80px" : "30px")};

    h2 {
      font-size: 15px;
    }
  }
`
