import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const About: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "35-year-emblem.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 120) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section className="bg-light text-dark text-center">
      <Container>
        <Row>
          <Col xs="12" md="10" lg="8" className="offset-md-1 offset-lg-2">
            <Img fixed={images.file.childImageSharp.fixed} className="mb-3" />
            <h2>About QC Event School</h2>
            <p>
              QC Event School is a faculty of QC Career School, an online international school that has been educating
              creative professionals for over 35 years. QC’s event &amp; wedding planning courses give students the best
              training possible from the comfort of home. Study at your own pace and maintain your current income,
              while real-world training prepares you to start your own business once you graduate!
            </p>
            <p>QC provides you with access to support 7 days a week. Contact us at any time by email, phone, on Live
              Chat, or through social media. QC Event School ensures that all of your educational needs are met, and
              provides you with career advice both before, during, and after you’ve completed your online event classes
              from home.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
