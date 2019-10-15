import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface Props {
  title?: string;
}

export const HowYouLearn: React.FC<Props> = ({ title = 'Certified Event Planner' }) => (
  <section className="bg-light">
    <Container className="text-center">
      <h2 className="mb-4">How You Learn</h2>
      <Row>
        <Col lg="10" className="offset-lg-1">
          <p className="lead">You don’t need a university degree to become an event planner&mdash;a professional certification is more than enough to work in the industry!</p>
        </Col>
      </Row>
      <p className="mb-5">With QC Event School, you’ll receive high-quality, comprehensive training to start a successful event planning career without the high tuition fees.</p>
      <Row className="mb-5">
        <Col lg="10" className="offset-lg-1">
          <div className="embed-responsive embed-responsive-16by9 shadow-lg">
            <iframe className="embed-responsive-item" width={690} height={402} src="https://www.youtube.com/embed/ML-Pd4JIZ58" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <h5>Enroll Today &amp; Begin Your Course</h5>
          <p>Enroll online at any time&mdash;no deadlines or application fees! Get online access to your course within two business days and receive physical materials in the mail.</p>
        </Col>
        <Col lg="4">
          <h5>Study &amp; Complete Assignments</h5>
          <p>Complete your event planning course work and upload it to the Online Student Center. You’ll get personalized audio feedback from your tutor on every assignment.</p>
        </Col>
        <Col lg="4">
          <h5>Graduate as a {title}</h5>
          <p>Graduate from your course in just 3 to 6 months and receive your certificate &amp; professional designation! Start your own event planning business &amp; begin booking clients right away.</p>
        </Col>
      </Row>
    </Container>
  </section>
);
