import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface Props {
  variant?: 'event ebook' | 'wedding ebook';
}

export const GetStarted: React.FC<Props> = ({ variant }) => {
  let headingText: JSX.Element;
  let buttonText: string;
  if (variant === 'event ebook') {
    headingText = <><small style={{ fontSize: '60%' }}>Learn How to Become an Event Planner</small><br />Start with a Free eBook</>;
    buttonText = 'Download eBook';
  } else if (variant === 'wedding ebook') {
    headingText = <><small style={{ fontSize: '60%' }}>Learn How to Become a Wedding Planner</small><br />Start with a Free eBook</>;
    buttonText = 'Download eBook';
  } else {
    headingText = <>Get Started with a Free<br />Course Catalog</>;
    buttonText = 'Get the Catalog';
  }

  return (
    <section className="bg-black text-light text-center" style={{ background: 'linear-gradient(154deg, #170338, #080113) #170338' }}>
      <Container>
        <h2 className="h1 mb-4" style={{ textTransform: 'uppercase' }}>{headingText}</h2>
        <a href="#catalog-form"><Button className="btn-lg caps">{buttonText}</Button></a>
      </Container>
    </section>
  );
};
