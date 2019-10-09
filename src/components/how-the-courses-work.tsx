import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Certificate from '../images/certificate.svg';
import Computer from '../images/computer.svg';
import CourseBooks from '../images/course-books.svg';

interface Props {
  title?: string;
  certification?: string;
}

export const HowTheCoursesWork: React.FC<Props> = ({ title = 'Certified Event Planner', certification = 'event planning certification' }) => (
  <section className="text-center">
    <Container>
      <h2>How the Courses Work</h2>
      <Row>
        <Col xs="12" lg="4">
          <img src={CourseBooks} />
          <h3 className="h5">Enroll Today &amp; Access Your Course Materials</h3>
          <p>When you enroll, QC Event School will mail out your course materials so you can study with physical copies of your course books. You can also access your texts and videos through QC's Online Student Center.</p>
        </Col>
        <Col xs="12" lg="4">
          <img src={Computer} />
          <h3 className="h5">Submit Assignments &amp; Review Feedback</h3>
          <p>Complete your assignments and upload them to the Online Student Center. Your tutor will review your work and provide you with a grade along with audio feedback. You'll review your tutor's advice to improve your skills for the next unit.</p>
        </Col>
        <Col xs="12" lg="4">
          <img src={Certificate} />
          <h3 className="h5">Graduate from QC &amp; Become a {title}</h3>
          <p>Once you complete your assignments and have graduated from your course, you'll receive your {certification}! You'll have lifetime access to course materials, as well as a 50% off enrollment discount for all additional courses.</p>
        </Col>
      </Row>
    </Container>
  </section>
);
