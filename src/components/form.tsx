import React, { useContext } from 'react';

import { LocationStateContext } from '../providers/location';

interface Props {
  action?: string;
  buttonText?: string;
  testGroup: number;
}

export const Form: React.FC<Props> = ({ action = 'https://go.qceventplanning.com/l/947642/2022-02-15/8n8h7', buttonText = 'Get the Catalog', testGroup }) => {
  const location = useContext(LocationStateContext);

  return (
    <form method="post" action={action}>
      <input type="hidden" name="school" value="QC Event School" />
      <input type="hidden" name="testGroup" value={testGroup} />
      <input type="hidden" name="countryCode" value={location.countryCode} />
      {location.provinceCode && <input type="hidden" name="provinceCode" value={location.provinceCode} />}
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input className="form-control" id="firstName" name="firstName" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input className="form-control" id="lastName" name="lastName" />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email <span className="text-primary">*</span></label>
        <input type="email" className="form-control" id="emailAddress" name="emailAddress" required />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="emailOptIn" name="emailOptIn" />
        <label className="form-check-label small" htmlFor="emailOptIn" style={{ fontWeight: 400 }}>
          I agree to receive additional emails from QC, including promotions, course launches,
          special offers and more. Unsubscribe anytime!
        </label>
      </div>
      <button className="btn btn-primary caps" type="submit">{buttonText}</button>
    </form>
  );
};
