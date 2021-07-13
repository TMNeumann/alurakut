import styled from "styled-components";

const Maingrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea{
    // display: none;
    @media(min-with: 860px){
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRealationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;
export default Maingrid;