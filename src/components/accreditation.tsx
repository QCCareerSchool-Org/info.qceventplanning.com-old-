import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const Accreditation: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      bbb: file(relativePath: { eq: "bbb-logo.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 116) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      },
      ilea: file(relativePath: { eq: "ilea-logo.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 116) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section className="text-center">
      <Container>
        <h2>Accreditation</h2>
        <Row>
          <Col xs="12" md="6" className="mb-4 mb-md-0">
            <a target="_blank" href="https://www.ileahub.com/Education/ILEA-Approved"><Img fixed={images.ilea.childImageSharp.fixed} alt="ILEA" className="mb-2" /></a>
            <h2 className="h4 text-dark">ILEA Approval</h2>
            <div className="mx-auto" style={{ maxWidth: 360 }}>
              <p>Every professional certification course QC offers is approved by the International Live Events Association. QC’s courses meet the rigorous standards for approval set by this industry-leading association.</p>
            </div>
          </Col>
          <Col xs="12" md="6">
            <a target="_blank" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175#sealclick"><Img fixed={images.bbb.childImageSharp.fixed} alt="BBB" className="mb-2" /></a>
            <h2 className="h4 text-dark">BBB Accreditation</h2>
            <div className="mx-auto" style={{ maxWidth: 360 }}>
              <p>QC Event School is fully accredited by the Better Business Bureau, holding the highest possible consumer satisfaction rating (A+).</p>
              <p><a target="_blank" rel="noopener noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175#sealclick">BBB Reviews</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
