import React, { useState } from 'react';

function Dropdown({routesData, defaultValue, onChange}) {

  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const handleRouteChange = (event) => {
    const selected = event.target.value
    onChange(selected)
  }

  return (
    <div className="dropdown">
      <select value={1} className="route-picker" onChange={handleRouteChange}>
      {routesData.routes.map((bus, index) => (
          <option key={index} value={bus.real_time_route_id}>{bus.real_time_route_id} - {bus.route_long_name}</option>
          ))}
      </select>
    </div>
  )
}

export default Dropdown;