import React from 'react';
import spinner from './spinner4.gif';

const Spinner = () => {
  return (
    <div className="col-md-12">
      <img 
        src={spinner}
        alt="Loading..."
        style={{ width: '80px', margin: '-11px auto', display: 'block'}}
      />
    </div>
  );
}

export default Spinner;
