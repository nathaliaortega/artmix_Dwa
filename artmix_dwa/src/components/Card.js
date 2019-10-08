import React from "react";
import styled from "styled-components";
const ImageBook = styled.img`
  width:200px;
  
`;
const Card = ({ author, Image }) => {
  return (
    <div>
        <ImageBook src={Image} alt="Profile" />
      
      <div>
        <h2>{author}</h2>
      </div>
    </div>
  );
};

export default Card;
