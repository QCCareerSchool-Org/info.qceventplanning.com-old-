import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

const Index: React.FC = () => {
  useEffect(() => {
    navigate('/free-event-course-catalog/');
  }, []);
  return null;
};

export default Index;
