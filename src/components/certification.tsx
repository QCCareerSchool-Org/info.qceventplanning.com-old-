import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from './background';

interface Props {
  cert?: 'iddp' | 'iewp';
}

export const Certification: React.FC<Props> = ({ cert = 'iddp' }) => {
  const images = useStaticQuery(graphql`
    query {
      iddp: file(relativePath: { eq: "certification-image-iddp.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 518) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Background image="weddingTableCloseup" style={{ backgroundPosition: '0% 0%' }}>
    <section className="text-light">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="10" lg="4" className="offset-md-1 mb-4 mb-lg-0">
            <Img fluid={images[cert].childImageSharp.fluid} alt={cert} />
          </Col>
          <Col xs="12" md="10" lg="6" className="offset-md-1">
            <h2>Your Event Planning Certification</h2>
            <p>Once you’ve completed your event planning courses online, you’ll receive your certification and professional designation. Use these to market yourself as a certified event planner and sell your services to clients.</p>
            <p>This certification demonstrates that you have successfully completed professional event planner training and that you possess all the skills and knowledge required to plan, design, and execute flawless events.</p>
            <h3>What Your Certification Gets You</h3>
            <ul>
              <li>Start your own event planning business</li>
              <li>Provide coordination &amp; vendor outreach services to clients</li>
              <li>Work for an existing event planning company</li>
              <li>Work for a corporation planning internal and external events</li>
              <li>Plan events for venues, hotels, restaurants, and more!</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  </Background>
  );
};
