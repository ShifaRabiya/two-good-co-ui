import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logoImg from '../assets/logo_transparent.png';
import { ShoppingCart, Menu } from 'lucide-react';

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik+Mono+One&display=swap');
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 48px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CompanyName = styled.div`
  font-family: 'Poppins', sans-serif;
  color: black;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Logo = styled.img`
  margin-top: 2px;
  height: 60px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Nav = styled.nav`
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    font-size: 1rem;
    font-weight: 400;
    color: #222;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #777;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
    margin-top: 16px;

    a {
      margin-left: 0;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 72px;

  svg {
    cursor: pointer;

    &:hover {
      color: #777;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <FontStyles />
      <HeaderWrapper>
        <LeftColumn>
          <CompanyName>
            TWO<br />
            GOOD<br />
            CO.
          </CompanyName>
          <Logo src={logoImg} alt="Company logo" />
        </LeftColumn>

        <RightColumn>
          <Nav isMenuOpen={isMenuOpen}>
            <a href="#">SHOP</a>
            <a href="#">CATERING</a>
            <a href="#">DONATE</a>
          </Nav>

          <Icons className="mobile-icons">
            <Menu size={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <ShoppingCart size={24} />
          </Icons>
        </RightColumn>
      </HeaderWrapper>
    </>
  );
};

export default Header;
