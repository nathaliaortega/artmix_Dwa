import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Theater from "./pages/TheaterPage";
import styled from "styled-components";
export const Grid = styled.div`
  display:grid;
  grid-template-columns: 150px 1fr;
  grid-gap: .5rem;
`;
function App() {
  return (
    <Grid>      
      <NavBar />      
      <Theater/>
    </Grid>
  );
}

export default App;
