import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Next Page
      <Link to="/">Go back to home</Link>
    </div>
  );
};