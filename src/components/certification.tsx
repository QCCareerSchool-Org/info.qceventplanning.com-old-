import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from './background';

interface Props {
  cert?: 'event' | 'wedding' | 'party';
}

export const Certification: React.FC<Props> = ({ cert = 'event' }) => {
  const images = useStaticQuery(graphql`
    query {
      iewp: file(relativePath: { eq: "certification-image-iewp.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 518) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      },
      iepp: file(relativePath: { eq: "certification-image-iepp.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 518) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      },
      iwpp: file(relativePath: { eq: "certification-image-iwpp.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 518) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  let courseName: string;
  let title: string;
  let shortTitle: string;
  let activities: string;
  let bullets: string[];
  let img: any;
  if (cert === 'event') {
    courseName = 'Event Planning';
    title = 'certified event planner';
    shortTitle = 'event planner';
    activities = 'events';
    bullets = [
      'Work for an existing event planning company',
      'Work for a corporation planning internal and external events',
      'Plan events for venues, hotels, restaurants, and more!',
    ];
    img = images.iepp;
  } else if (cert === 'wedding') {
    courseName = 'Wedding Planning';
    title = 'certified wedding planner';
    shortTitle = 'wedding planner';
    activities = 'weddings';
    bullets = [
      'Work for an existing wedding planning company',
      'Work for a wedding venue as a planner & coordinator',
    ];
    img = images.iwpp;
  } else if (cert === 'party') {
    courseName = 'Party Planning';
    title = 'certified party planner';
    shortTitle = 'party planner';
    activities = 'events';
    bullets = [
      'Work for an existing party planning company',
      'Work for a hotel, restaurant, or other venues',
    ];
    img = images.iepp;
  } else {
    throw Error('unknown certification');
  }
  return (
    <Background image="weddingTableCloseup" style={{ backgroundPosition: '0% 0%' }}>
    <section className="text-light">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="10" lg="4" className="offset-md-1 mb-4 mb-lg-0">
            <Img fluid={img.childImageSharp.fluid} alt={cert} />
          </Col>
          <Col xs="12" md="10" lg="6" className="offset-md-1">
            <h2>Your {courseName} Certification</h2>
            <p>Once you’ve completed your {courseName.toLowerCase()} courses online, you’ll receive your certification and professional designation. Use these to market yourself as a {title} and sell your services to clients.</p>
            <p>This certification demonstrates that you have successfully completed professional {shortTitle} training and that you possess all the skills and knowledge required to plan, design, and execute flawless {activities}.</p>
            <h3>What Your Certification Gets You</h3>
            <ul>
              <li>Start your own {courseName.toLowerCase()} business</li>
              <li>Provide coordination &amp; vendor outreach services to clients</li>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  </Background>
  );
};
