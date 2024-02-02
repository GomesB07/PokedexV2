import styled from "styled-components"

export const Container = styled.div`
  width: ${(props) => (props.pagElements ? "100vw" : "min-content")};
  height: ${(props) => (props.pagElements ? "min-content" : "10vh")};
  min-height: ${(props) => (props.pagElements ? "90vh" : "0")};
  background-color: ${(props) => (props.pagElements ? "#121216" : "")};
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
  border-radius: 8px;
  border: 2px solid #fff;
  cursor: pointer;
  background-color: ${(props) => props.color};

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
