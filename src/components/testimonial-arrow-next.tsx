import React from 'react';

import TestimonialNext from '../images/testimonial-next.png';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const TestimonialArrowNext: React.FC<Props> = ({ className, style, onClick }) => (
  <div className={className} style={{ display: 'block', color: 'black', ...style }} onClick={onClick}>
    <img src={TestimonialNext} width={31} height={58} style={{ position: 'relative', left: -11 }} />
  </div>
);
