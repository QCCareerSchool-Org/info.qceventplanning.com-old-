import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { About } from '../components/about';
import { Accreditation } from '../components/accreditation';
import { Background } from '../components/background';
import { Certification } from '../components/certification';
import { Form } from '../components/form';
import { GetStarted } from '../components/get-started';
import { HowTheCoursesWork } from '../components/how-the-courses-work';
import { HowYouLearn } from '../components/how-you-learn';
import { Industry } from '../components/industry';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Testimonials } from '../components/testimonials';
import { ScreenWidthContext } from '../providers/screen-width';

import Arrow from '../images/arrow.svg';

const FreeEventCourseCatalog: React.FC = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const desktop = screenWidth >= 992;

  return (
    <Layout>
      <SEO title="Free QC Course Catalog" />

      <Background image="weddingTable">
        <section>
          <Container id="catalog-form">
            <Row className="align-items-center">
              <Col xs="12" lg="6" className="order-1 order-lg-2 text-center text-lg-left">
                <h1 style={{ textTransform: 'uppercase' }} className="text-white text-shadow mb-4"><small>Get A Free</small><br />Event Planning Course Catalog</h1>
                {desktop ? <img src={Arrow} width={300} alt="" /> : null}
              </Col>
              <Col xs="12" md="8" lg="6" className="offset-md-2 offset-lg-0 order-2 order-lg-1">
                <Card>
                  <Card.Body>
                    <div className="p-0 p-md-4">
                      <Card.Title className="text-center mb-4">Download the Free Course Catalog</Card.Title>
                      <Form recaptcha="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go" />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Background>

      <HowTheCoursesWork />

      <Testimonials
        data={[
          {
            excerpt: '“I loved how QC’s online event and wedding planning courses were affordable”',
            quote: '“I was working full-time, balancing my personal life, and wanting to start a side business…I did not have time to actually go to a physical event school. I loved how QC’s online event and wedding planning courses were affordable and I could complete them on my own schedule. QC’s tutors work in the actual industry. They gave me a good, basic knowledge of event planning standards and industry terminology that I wasn’t exposed to at the time.”',
            name: 'Jenna Pelcher',
            title: 'IEWP, IEDP, Luxury Wedding Specialist',
          },
          {
            excerpt: '“It’s in depth, informative, and the assignments are fun.”',
            quote: '“I have loved every minute of the course. It’s in depth, informative, and the assignments are fun. I felt like I was working for an actual client, and was well prepared for the industry and starting my own business. I’m confident that my training will lead my company, The Grape Vine Events, to great success.”',
            name: 'Lindsay Vine, IEWP',
            title: 'The Grape Vine Events',
          },
          {
            excerpt: '“Not only did it teach me how to start my business, but it also gives you a lot of hands-on experience.”',
            quote: '“I got so much out of the course and it was worth every penny. Not only did it teach me how to start my business, but it also gives you a lot of hands-on experience. Not to mention a lot of behind the scenes advice on your business and important forms to get your brand started. Since graduating and receiving my certificate, I started my event planning business and the most exciting part [is] I’m booking weddings and other events.”',
            name: 'Marie Luciano, IEWP',
          },
          {
            excerpt: '“It really is a valuable course, with great tutors and support!”',
            quote: '“Every moment I spent on this course was more than worth it. I learnt both little and big details that I still wouldn’t know now! It really is a valuable course, with great tutors and support! Worth every penny.”',
            name: 'Claudia Montano, IEWP',
          },
        ]}
      />
      <HowYouLearn />
      <Certification />
      <Industry />
      <Accreditation />
      <About />
      <GetStarted />
    </Layout>
  );
};

export default FreeEventCourseCatalog;
