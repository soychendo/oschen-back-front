import React from 'react';

function Clock({hour}) {
  return (
    <span className="hour_ecuador">{hour.toLocaleTimeString()}</span>
  );
}
export default Clock;