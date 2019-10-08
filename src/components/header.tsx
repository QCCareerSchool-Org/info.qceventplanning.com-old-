import React from 'react';

interface Props {
  telephoneNumber: string;
}

export const Header: React.FC<Props> = ({ telephoneNumber }) => (
  <header className="text-center">
    <nav className="bg-black text-white d-flex justify-content-center justify-content-sm-end small py-2 py-sm-0">
      <div className="mx-4 py-1 py-sm-2 ca-only"><a className="text-white" href={'tel:' + telephoneNumber}>CALL</a><span className="d-none d-md-inline"> {telephoneNumber}</span></div>
      <div className="mx-4 py-1 py-sm-2"><a className="text-white" href="https://www.qceventplanning.com/free-brochure/">GET CATALOG</a></div>
      <div className="bg-primary mx-4 py-1 py-sm-2 px-3"><a className="text-white" href="https://enroll.qceventplanning.com/">ENROLL</a></div>
    </nav>
    <div id="brand-bar">
      <a href="https://www.qceventplanning.com"><span id="brand">QC Event School</span></a>
    </div>
  </header>
);
