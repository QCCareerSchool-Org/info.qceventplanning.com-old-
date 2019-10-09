import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from '../components/background';
import { Form } from '../components/form';
import { Layout } from '../components/layout';

export default () => (
  <Layout>
    <Background image="weddingTable">
      <section>
        <Container>
          <h1 style={{ textTransform: 'uppercase' }} className="text-center text-white text-shadow mb-4">Become a<br /><strong>Certified Event Planner</strong></h1>
          <Row>
            <Col lg="6">
              <Card>
                <Card.Body className="p-4">
                  <Card.Title>Get Started with a <strong>Free</strong> Course Catalog</Card.Title>
                  <Form recaptcha="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Background>
  </Layout>
);
