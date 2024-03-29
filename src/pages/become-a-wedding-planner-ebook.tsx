import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { About } from '../components/about';
import { Accreditation } from '../components/accreditation';
import { Background } from '../components/background';
import { Certification } from '../components/certification';
import { EventTestimonials } from '../components/event-testimonials';
import { Form } from '../components/form';
import { GetStarted } from '../components/get-started';
import { HowTheCoursesWork } from '../components/how-the-courses-work';
import { HowYouLearn } from '../components/how-you-learn';
import { Industry } from '../components/industry';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { ScreenWidthContext } from '../providers/screen-width';

import Arrow from '../images/arrow.svg';

import { useTestGroup } from '../hooks/useTestGroup';

const BecomeAWeddingPlannerEbook: React.FC = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const desktop = screenWidth >= 992;

  const testGroup = useTestGroup();

  return (
    <Layout>
      <SEO title="Free QC Course Catalog" />

      <Background image="weddingTable">
        <section>
          <Container id="catalog-form">
            <Row className="align-items-center">
              <Col xs="12" lg="6" className="order-1 order-lg-2 text-center text-lg-left">
                <h1 style={{ textTransform: 'uppercase' }} className="text-white text-shadow mb-4"><small style={{ fontSize: '60%' }}>Get the Free eBook</small><br />Become a Wedding Planner</h1>
                {desktop ? <img src={Arrow} width={300} alt="" style={{ marginBottom: '8rem' }} /> : null}
              </Col>
              <Col xs="12" md="8" lg="6" className="offset-md-2 offset-lg-0 order-2 order-lg-1">
                <Card>
                  <Card.Body>
                    <div className="p-0 p-md-4">
                      <Card.Title className="mb-4 text-black">Download the Free eBook</Card.Title>
                      <Form testGroup={testGroup} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Background>
      <HowTheCoursesWork events="wedding and related" />
      <EventTestimonials />
      <HowYouLearn title="a Certified Wedding Planner" shortTitle="a wedding planner" career="wedding planning" />
      <Certification cert="wedding" />
      <Industry />
      <Accreditation />
      <About />
      <GetStarted variant="wedding ebook" />
    </Layout>
  );
};



export default BecomeAWeddingPlannerEbook;
