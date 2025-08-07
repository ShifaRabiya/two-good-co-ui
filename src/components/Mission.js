import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #fff;
  padding: 96px 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 64px 24px;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center; /* Optional: centers the heading */
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    color: #111;
  }
`;

const Right = styled.div`
  flex: 1;
  max-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #757474ff;
    text-decoration: underline;
    text-underline-offset: 4px;
    letter-spacing: 0.5px;

    &:hover {
      color: #000;
    }
  }
`;

const MissionSection = () => {
  return (
    <Section>
      <Left>
        <h1>
          WE BELIEVE IN PEOPLE,<br />
          UNTIL THEY BELIEVE IN<br />
          THEMSELVES AGAIN.
        </h1>
      </Left>
      <Right>
        <p>
          Everything we do is designed to rebuild self worth and independence,
          in order to break free from the cycle of disadvantage.
        </p>
        <p>
          With every purchase you make with us, you're helping to change the
          course of someone's life; you're walking alongside vulnerable women
          as they find their way home again.
        </p>
        <a href="#">SHOP TO SUPPORT</a>
      </Right>
    </Section>
  );
};

export default MissionSection;
