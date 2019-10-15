import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import BusinessIcon from '../images/business-icon.svg';
import CertificationIcon from '../images/certification-icon.svg';
import CostsIcon from '../images/costs-icon.svg';
import FeedbackIcon from '../images/feedback-icon.svg';
import FlexibleIcon from '../images/flexible-icon.svg';
import LifetimeIcon from '../images/lifetime-icon.svg';

export const HowTheCoursesWork: React.FC = () => (
  <section className="bg-light">
    <Container className="text-center">
      <h2>Join QC Event School</h2>
      <p className="lead mb-5">QC’s event &amp; wedding planning courses provide you with:</p>
      <Row>
        <Col xs="12" lg="4" className="mb-5 mb-lg-0">
          <p><img className="img-fluid" width="75" height="75" src={FeedbackIcon} alt="1-on-1 feedback" /></p>
          <h3>1-on-1 feedback</h3>
          <p>Personalized 1-on-1 feedback from a tutor invested in your success.</p>
        </Col>
        <Col xs="12" lg="4" className="mb-5 mb-lg-0">
          <p><img className="img-fluid" width="75" height="75" src={CostsIcon} alt="No high tuition cost" /></p>
          <h3>Learn the fundamentals</h3>
          <p>Practical knowledge for budgeting, coordinating, and executing a variety of events.</p>
        </Col>
        <Col xs="12" lg="4" className="mb-5 mb-lg-0">
          <p><img className="img-fluid" width="75" height="75" src={BusinessIcon} alt="Business training" /></p>
          <h3>Real-world exercises</h3>
          <p>Hands-on assignments based on real-world scenarios and clients personas.</p>
        </Col>
        <Col xs="12" lg="4" className="mb-5 mb-lg-0">
          <p><img className="img-fluid" width="75" height="75" src={LifetimeIcon} alt="Lifetime access" /></p>
          <h3>Lifetime access</h3>
          <p>Lifetime access to up-to-date course materials and business templates.</p>
        </Col>
        <Col xs="12" lg="4" className="mb-5 mb-lg-0">
          <p><img className="img-fluid" width="75" height="75" src={CertificationIcon} alt="Professional certification" /></p>
          <h3>Professional certification</h3>
          <p>A professional certification and designation upon graduation of your course.</p>
        </Col>
        <Col xs="12" lg="4">
          <p><img className="img-fluid" width="75" height="75" src={FlexibleIcon} alt="Flexible payment options" /></p>
          <h3>Flexible payment options</h3>
          <p>Flexible tuition payment options. No hidden fees. No additional costs.</p>
        </Col>
      </Row>
    </Container>
  </section>
);
