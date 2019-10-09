import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from 'react-slick';

/* tslint:disable:no-submodule-imports */
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Accreditation } from '../components/accreditation';
import { Background } from '../components/background';
import { Form } from '../components/form';
import { GetStarted } from '../components/get-started';
import { HowTheCoursesWork } from '../components/how-the-courses-work';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const FreeEventCourseCatalog: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      sian: file(relativePath: { eq: "sian-gerryts.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 153) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      },
      michelle: file(relativePath: { eq: "michelle-panton.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 153) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      },
      lindsay: file(relativePath: { eq: "lindsay-vine.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 153) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Free QC Course Catalog" />

      <Background image="weddingTable">
        <section>
          <Container id="catalog-form">
            <h1 style={{ textTransform: 'uppercase' }} className="text-center text-white text-shadow mb-4">Become a<br /><strong>Certified Event Planner</strong></h1>
            <Row>
              <Col xs="12" md="8" lg="6" className="offset-md-2 offset-lg-3">
                <Card>
                  <Card.Body>
                    <div className="p-0 p-md-4">
                      <Card.Title className="text-center mb-4">Get Started with a <strong>Free</strong> Course Catalog</Card.Title>
                      <Form recaptcha="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go" />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Background>

      <section style={{ background: '#ededed' }}>
        <Container>
          <h2 className="h4 mb-4 text-center">QC Event School Will Help You Launch Your Event &amp; Wedding Planning Career!</h2>
          <div className="d-flex justify-content-center">
            <div>
              <p>Download a free course catalog to</p>
              <ul>
                <li>Read about QC's professional certification programs and specializations</li>
                <li>Meet the tutors who will mentor you throughout your course</li>
                <li>Find out the tuition fees for each course and choose a payment plan</li>
                <li>Discover how you can't go wrong with QC's money back guarantee!</li>
                <li>Learn about the full business training included in QC's courses</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Accreditation />

      <section className="bg-primary text-white">
        <Container>
          <h2 className="text-center mb-4">Student Testimonials</h2>

          <Slider dots={true} infinite={true} speed={500} adaptiveHeight={true} className="px-3 px-md-5 mx-4">
            <div>
              <Row className="align-items-center">
                <Col xs="12" md="4" lg="3" className="text-center offset-lg-1">
                  <Img fixed={images.sian.childImageSharp.fixed} alt="Sian Gerryts" />
                </Col>
                <Col xs="12" md="8" lg="6">
                  <p className="lead">“The Event and Wedding Planning course has given me the skills I need to pursue my dream career. It feels amazing to be doing something I love.”</p>
                  <p className="lead text-right">—Sian Gerryts</p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="align-items-center">
                <Col xs="12" md="4" lg="3" className="text-center offset-lg-1">
                  <Img fixed={images.michelle.childImageSharp.fixed} alt="Michelle Panton" />
                </Col>
                <Col xs="12" md="8" lg="6">
                  <p className="lead">“The course has been invaluable to my career in the wedding and event planning industry. It gave me the confidence to start my business and also gave me the support of the tutors when needed.”</p>
                  <p className="lead text-right">—Michelle Panton, Belle Weddings and Events</p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="align-items-center">
                <Col xs="12" md="4" lg="3" className="text-center offset-lg-1">
                  <Img fixed={images.lindsay.childImageSharp.fixed} alt="Lindsay Vine" />
                </Col>
                <Col xs="12" md="8" lg="6">
                  <p className="lead">“I have loved every minute of the course. It’s in depth, informative, and the assignments are fun. I felt like I was working for an actual client, and was well prepared for the industry and starting my own business. I’m confident that my training will lead my company, The Grape Vine Events, to great success.”</p>
                  <p className="lead text-right">—Lindsay Vine, The Grape Vine Events</p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </section>

      <HowTheCoursesWork />

      <GetStarted />
    </Layout>
  );
};

export default FreeEventCourseCatalog;
