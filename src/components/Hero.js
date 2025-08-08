import React from 'react';
import styled from 'styled-components';
//import heroImage from '../assets/hero-bg.png';
import cat1 from '../assets/cat1.avif';
import cat2 from '../assets/cat2.avif';
import cat3 from '../assets/cat3.avif';
import headerVideo from '../assets/header-video.mp4';

const HeroSection = styled.section`
  background-color: #fff;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 12px;
  box-sizing: border-box;

  h1 {
    margin-top: 40px;
    font-family: 'Poppins', serif;
    font-size: 11.5rem;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: 24px;
    color: #111111;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 24px;
    display: block;

    @media (max-width: 768px) {
      width: 100%;  // Already handled by width: 100%
      max-width: 100%;
    }
  }
`;

const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 12px 48px;
  margin-top: 48px;

  @media (max-width: 768px) {
      justify-content: center;
    }
`;      

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const FullWidthVideo = styled.video`
  width: calc(100vw - 40px);
  height: auto;
  display: block;
  margin-left:20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const OverlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.bg || '#eee'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  .dot {
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
  }

  .label {
    font-weight: normal;
    color: #000;
  }

  .bold {
    font-weight: bold;
  }

  .arrow {
    font-weight: bold;
  }
`;


const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <h1>CHANGE<br />THE COURSE</h1>
      </Content>

      <FullWidthVideo
        src= {headerVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <CardsSection>
        <Card>
          <img src={cat1} alt="New Goodies" />
          <OverlayButton bg="#D4EEC7">
            <div className="dot" />
            <div className="label">SHOP</div>
            <div className="bold">NEW GOODIES</div>
            <div className="arrow">›</div>
          </OverlayButton>
        </Card>
        <Card>
          <img src={cat2} alt="Pantry" />
          <OverlayButton bg="#F8E8DE">
            <div className="dot" />
            <div className="label">SHOP</div>
            <div className="bold">PANTRY</div>
            <div className="arrow">›</div>
          </OverlayButton>
        </Card>
        <Card>
          <img src={cat3} alt="Bath" />
          <OverlayButton bg="#F1F1F1">
            <div className="dot" />
            <div className="label">SHOP</div>
            <div className="bold">BATH</div>
            <div className="arrow">›</div>
          </OverlayButton>
        </Card>
      </CardsSection>
    </HeroSection>
  );
};

export default Hero;
