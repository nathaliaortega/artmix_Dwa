import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
background-image: linear-gradient(black, white);
  height:100vh;
  margin:0;
  float: left;
  width:110px;
  display:flex;
  justify-content:center;
  padding:20px 20px 0 20px;
  position:absolute;
  z-index:10;
`;
const List=styled.ul`
  padding:0;
`;
const Item = styled.li`
  list-style-type: none;
  color:white;
  padding-top:10px;
  font-weigth:600;
`;
class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <List>
          <Item>Teatro</Item>
          <Item>Poemas</Item>
        </List>
      </Nav>
    );
  }
}

export default NavBar;
