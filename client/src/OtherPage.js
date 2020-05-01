import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Next PAGE
      <Link to="/">Go back to home</Link>
    </div>
  );
};