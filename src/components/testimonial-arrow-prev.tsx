import React from 'react';

import TestimonialPrev from '../images/testimonial-prev.png';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const TestimonialArrowPrev: React.FC<Props> = ({ className, style, onClick }) => (
  <div className={className} style={{ display: 'block', color: 'black', ...style }} onClick={onClick}>
    <img src={TestimonialPrev} width={31} height={58} />
  </div>
);
