// Header.js
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 15px 0;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Text-Only Social Media</h1>
    </StyledHeader>
  );
};

export default Header;