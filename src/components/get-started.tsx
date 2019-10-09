import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const GetStarted: React.FC = () => (
  <section className="bg-black text-light text-center">
    <Container>
      <h2 className="mb-4">Get Started with a Free Course Catalog</h2>
      <a href="#catalog-form"><Button className="caps">Download the Catalog</Button></a>
    </Container>
  </section>
);
