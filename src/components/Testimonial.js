import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 96px 24px;
  text-align: center;
`;

const Heading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.3;
  color: #111;
  max-width: 800px;
  margin: 0 auto 48px;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background 0.3s;

  &:hover {
    background: #222;
  }
`;

const Subtext = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  color: #333;
`;

const Testimonial = () => {
  return (
    <Section>
      <Heading>
        THANK YOU SO MUCH FOR<br />
        THE BEAUTIFUL CATERING; IT<br />
        MEANS A LOT WORKING WITH<br />
        A COMPANY SUCH AS TWO<br />
        GOOD CO.
      </Heading>
      <Button>SEND YOUR OWN MESSAGE</Button>
      <Subtext>
        Sometimes it’s the smallest actions<br />
        that can make the biggest impact.
      </Subtext>
    </Section>
  );
};

export default Testimonial;
