import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from 'react-slick';

/* tslint:disable:no-submodule-imports */
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { TestimonialArrowNext } from './testimonial-arrow-next';
import { TestimonialArrowPrev } from './testimonial-arrow-prev';

type Data = {
  excerpt: string;
  quote: string;
  name: string;
  title?: string;
};

interface Props {
  data: Data[];
}

export const Testimonials: React.FC<Props> = ({ data }) => (
  <section className="text-center">
  <Container>
    <Row className="no-gutters">
      <Col xs="12" md="10" className="offset-md-1">
        <Slider className="d-flex align-items-center" dots={true} fade={true} prevArrow={<TestimonialArrowPrev />} nextArrow={<TestimonialArrowNext />}>
          {data.map((d, i) => (
            <div key={i}>
              <p className="testimonial-excerpt">{d.excerpt}</p>
              <p className="testimonial-quote">{d.quote}</p>
              <p className="testimonial-name">{d.name}</p>
              {d.title ? <p className="testimonial-title">{d.title}</p> : null}
            </div>
          ))}
        </Slider>
      </Col>
    </Row>
  </Container>
</section>
);
