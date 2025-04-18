import React from 'react';

const Destination = ({ tours, selectedTour, setSelectedTour }) => {
  const uniqueTourNames = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="destination-selector">
      <label htmlFor="tour-select">Select a Tour:</label>
      <select
        id="tour-select"
        value={selectedTour}
        onChange={(e) => setSelectedTour(e.target.value)}
      >
        {uniqueTourNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Destination;