import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from 'react-slick';

import { TestimonialArrowNext } from './testimonial-arrow-next';
import { TestimonialArrowPrev } from './testimonial-arrow-prev';

interface Props {
  data: Array<{
    excerpt: string;
    quote: string;
    name: string;
    title?: string;
  }>;
}

export const Testimonials: React.FC<Props> = ({ data }) => (
  <section className="text-center">
  <Container>
    <Row className="no-gutters">
      <Col xs="12" md="10" className="offset-md-1">
        <Slider dots={true} adaptiveHeight={true} prevArrow={<TestimonialArrowPrev />} nextArrow={<TestimonialArrowNext />}>
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
