import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import React, { ReactNode, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';

import { LocationStateContext } from '../providers/location';
import { Header } from './header';
import './layout.scss';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {

  const location = useContext(LocationStateContext);

  let telephoneNumber;
  if (location.countryCode === 'CA' || location.countryCode === 'US') {
    telephoneNumber = '1-833-600-3751';
  } else if (location.countryCode === 'GB') {
    telephoneNumber = '0800 066 4734';
  } else if (location.countryCode === 'GB') {
    telephoneNumber = '1800 531 923';
  } else if (location.countryCode === 'GB') {
    telephoneNumber = '0800-451-979';
  } else {
    telephoneNumber = '+1 613 749 8248';
  }

  return (
    <>
      {/* <Helmet
        script={[
          { src: withPrefix('adroll.js'), async: true },
        ]}
      /> */}
      <Header telephoneNumber={telephoneNumber} />
      <main>{children}</main>
      <footer className="text-center" style={{ background: '#ededed' }}>
        <section>
          <Container className="mb-5">
            <h2 className="h3">Have questions? Give us a call.</h2>
            <p className="h3 mb-4"><a href={'tel:' + telephoneNumber}>{telephoneNumber}</a></p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.qceventplanning.com/online-event-courses/">Online Event Courses</a>
              <span className="px-2">|</span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.qceventplanning.com/tuition/">Tuition</a>
              <span className="px-2">|</span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.qceventplanning.com/about-qc/frequently-asked-questions/">FAQ</a>
              <span className="px-2">|</span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.qceventplanning.com/contact-us/">Contact Us</a>
              <span className="px-2">|</span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.qceventplanning.com/terms.html">Privacy Policy</a>
            </p>
            <p>© {new Date().getFullYear()} QC Event School</p>
          </Container>
        </section>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
