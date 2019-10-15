import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GrowthIcon from '../images/growth-icon.svg';

export const Industry: React.FC = () => (
  <section className="bg-black text-light text-center">
    <Container>
      <Row>
        <Col xs="12" md="10" lg="6" className="offset-md-1 offset-lg-3">
          <img src={GrowthIcon} alt="growth icon" className="mb-4" />
          <h2 className="h3">Join an industry that’s expected to grow by 7% over the next 10 years*</h2>
          <p className="lead mb-4">That’s much faster than the average growth rate across all occupations!</p>
          <p><em>* US Bureau of Labor Statistics</em></p>
        </Col>
      </Row>
    </Container>
  </section>
);
