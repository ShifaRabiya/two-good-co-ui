import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #fafafa;
  padding: 64px 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // stack on small screens
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 16px;
  }

  .title {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #909090ff;
    margin-bottom: 6px;
  }

  .price {
  font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    color: #909090;
  }
`;

const products = [
  {
    image: "https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format",
    title: 'THE LOVE + CARE PACK',
    price: '$50',
  },
  {
    image: "https://cdn.sanity.io/images/w8f1ak3c/production/7a2007de38624a0b2935416bf51a4584889aa232-5000x5000.png/Website%20Products%20(12).png?w=320&h=320&auto=format",
    title: 'TWO GOOD TOTE BAG',
    price: '$40',
  },
  {
    image: "https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=320&h=320&auto=format",
    title: 'NOURISH & SOOTHE HAND LOTION',
    price: '$38',
  },
  {
    image: "https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=1024&h=1024&auto=format",
    title: 'COOKBOOK TWO',
    price: '$45',
  },
];

const ProductGrid = () => {
  return (
    <Section>
      <Grid>
        {products.map((item, index) => (
          <Item key={index}>
            <img src={item.image} alt={item.title} />
            <div className="title">{item.title}</div>
            <div className="price">{item.price}</div>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductGrid;
