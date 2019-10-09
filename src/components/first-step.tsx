import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface Props {
  title?: string;
}

export const FirstStep: React.FC<Props> = ({ title = 'an event planner' }) => (
  <section className="bg-black text-light text-center">
    <Container>
      <h2>Take the First Step in Starting a New and Exciting Career!</h2>
      <p className="mb-4">Get the free ebook today and find out if becoming {title} is right for you!</p>
      <a href="#catalog-form"><Button className="caps">Download the Catalog</Button></a>
    </Container>
  </section>
);
