import { Link } from 'gatsby';
import React from 'react';

import { Background } from '../components/background';
import { HowTheCoursesWork } from '../components/how-the-courses-work';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Background image="weddingTable" className="text-white">
      <section>
        <div className="container">
          <div className="text-center">
            <h1 className="my-4 text-shadow">Page Not Found</h1>
            <div style={{ height: 48 }} />
            <p>Sorry, the page you're looking for isn't available.</p>
            <Link to="/">Brochure Form</Link>
          </div>
        </div>
      </section>
    </Background>

    <HowTheCoursesWork />

  </Layout>
);

export default NotFoundPage;
