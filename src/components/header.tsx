import React from 'react';

interface Props {
  telephoneNumber: string;
}

export const Header: React.FC<Props> = ({ telephoneNumber }) => (
  <header>
    {telephoneNumber}
  </header>
);
