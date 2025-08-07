import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const FooterSection = styled.footer`
  background-color: #f6f6f6;
  padding: 48px 24px 32px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  text-align: center;
`;

const Line = styled.hr`
  border-top: 3px solid #111111;
  margin: 32px 0;
  width: 100%;
`;

const TopRow = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto 32px;
  text-align: left;
`;

const Column = styled.div`
  flex: 1;
  min-width: 160px;
  margin: 12px 0;

  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: #777;
    padding-bottom: 10px;
  }

  a {
    display: block;
    font-weight: 450;
    font-size: 0.75rem;
    line-height: 10px;
    margin-bottom: 8px;
    text-decoration: none;
    color: #111;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Column2 = styled.div`
  flex: 1;
  min-width: 160px;
  margin: 12px 0;

  p {
    text-align: right;
    font-size: 0.75rem;
    font-weight: 500;
    color: #777;
    padding-bottom: 10px;
  }

  a {
    text-align: right;
    font-weight: 450;
    display: block;
    font-size: 0.75rem;
    line-height: 10px;
    margin-bottom: 8px;
    text-decoration: none;
    color: #111;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  min-width: 100px;

  img {
    height: 200px;
    width: auto;

    @media (max-width: 768px) {
      height: 100px;
      width: auto;
    }
  }
`;

const BottomRow = styled.div`
  padding-top: 40px;
  font-size: 0.75rem;
  color: #999;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const Acknowledgement = styled.p`
  padding-top: 40px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.75rem;
  line-height: 1.6;
  color: #333;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Line />  
      <TopRow>
        <Column>
          <p>CONNECT WITH US</p>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </Column>

        <LogoWrapper>
          <img src={logo} alt="Logo" />
        </LogoWrapper>

        <Column2>
          <p>THE NITTY GRITTIES</p>
          <a href="#">Good Things FAQs</a>
          <a href="#">Good Food FAQs</a>
          <a href="#">Good Places</a>
          <a href="#">Pathways</a>
          <a href="#">Careers</a>
        </Column2>
      </TopRow>

      <BottomRow>
        <span>© TWO GOOD CO. 2023</span>
        <span>TERMS OF USE</span>
        <span>PRIVACY POLICY</span>
      </BottomRow>

      <Acknowledgement>
        We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.
      </Acknowledgement>
    </FooterSection>
  );
};

export default Footer;
