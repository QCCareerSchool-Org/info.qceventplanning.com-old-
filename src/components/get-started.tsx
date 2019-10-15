import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const GetStarted: React.FC = () => (
  <section className="bg-black text-light text-center" style={{ background: 'linear-gradient(154deg, #170338, #080113) #170338' }}>
    <Container>
      <h2 className="h1 mb-4" style={{ textTransform: 'uppercase' }}>Get Started with a Free<br />Course Catalog</h2>
      <a href="#catalog-form"><Button className="btn-lg caps">Get the Catalog</Button></a>
    </Container>
  </section>
);
