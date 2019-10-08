import React, { Component } from "react";
import styled from "styled-components";
import PlaysContainer from "../containers/PlaysContainer";
export const Grid = styled.div`
  grid-column-start: 2;
  padding:20px;
  height:100vh;
`;

class TheaterPage extends Component {
  render() {
    return (
      <Grid>
        
        <PlaysContainer />
      </Grid>
    );
  }
}
export default TheaterPage;
