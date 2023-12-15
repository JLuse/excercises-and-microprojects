// pages/developer/events.js
import React from 'react';

const Events = () => {

  const handleClick = () => {
    throw new Error('This is a triggered error!');
  }

  return (
    <div>
      <h1>Developer Events</h1>
      <button onClick={handleClick}>This is error</button>
    </div>
  );
}

export default Events;
