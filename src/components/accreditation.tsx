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
          fixed(quality: 90, width: 155) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      },
      ilea: file(relativePath: { eq: "ilea-logo.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 155) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section>
      <Container>
        <Row className="text-center">
          <Col className="col-12 col-md-6">
            <a target="_blank" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175#sealclick"><Img fixed={images.bbb.childImageSharp.fixed} alt="BBB" /></a>
            <h2 className="h4">BBB Accreditation</h2>
            <div className="mx-auto" style={{ maxWidth: 360 }}>
              <p>QC Event School is accredited by the Better Business Bureau, holding the highest possible consumer satisfaction rating (A+).</p>
              <p><a target="_blank" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175#sealclick">BBB Reviews</a></p>
            </div>
          </Col>
          <Col className="col-12 col-md-6">
            <a target="_blank" href="https://www.ileahub.com/Education/ILEA-Approved"><Img fixed={images.ilea.childImageSharp.fixed} alt="ILEA" /></a>
            <h2 className="h4">ILEA Approval</h2>
            <div className="mx-auto" style={{ maxWidth: 360 }}>
              <p>Every professional certification course QC offers is approved by the International Live Events Association. QC's courses meet the rigorous standards for approval and offer students high-quality training in event planning.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
