// import React from 'react';
import * as Sentry from '@sentry/react';

const CustomPageSize = ({ currentPageSize }) => {
  const options = Array(5).fill(50).map((v, i) => v * (i + 1));

  const selectedPageSize = currentPageSize || 50;
  return (
    <div className='custom-pagesize-container'>
      <span className='page-size-label'>Lanes per page</span>
      <select className='custom-dropdown'>
        {options.map(option => (
          <option key={option} value={option} selected={option === selectedPageSize}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sentry.withProfiler(CustomPageSize, { name: 'CustomPageSizeNAME' });
