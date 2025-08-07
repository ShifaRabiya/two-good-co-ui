import React from 'react';
import styled from 'styled-components';
import imp1 from '../assets/imp1.avif';
import imp2 from '../assets/imp2.avif';

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 96px 24px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 12px;
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1 1 300px;
  max-width: 500px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 24px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #111;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex: 0 0 auto;
  padding-top: 100px;

  @media (max-width: 768px) {
      flex-direction: column;
      align-items: center; 
      justify-content: center;
      width: 100%;
  }
  
  img {
    width: 260px;
    height: auto;
    object-fit: cover;
  }
`;

const Impact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <h3>OUR IMPACT.</h3>
          <p>The thing is, we don't save anyone.</p>
          <p>
            What we do is provide a safe space for
            women to change the course of their own lives.
          </p>
          <p>
            After many years of living in crisis, abuse and complex trauma, restoring self-worth is
            foundational for independence. We believe that through experiences that promote love and
            respect, we can spark and nurture a sense of self-worth for those on the path of healing.
          </p>
          <a href="#">HERE'S HOW WE DO IT</a>
        </Left>
        <Right>
          <img src={imp1} />
          <img src={imp2} />
        </Right>
      </Container>
    </Section>
  );
};

export default Impact;
