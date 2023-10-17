import React from 'react';

function Toolbar(props) {
  return (
    <div>
      {props.filters.map((filter) => ( 
        <button
          key={filter}
          onClick={() => props.onSelectFilter(filter)}
          className={filter === props.selected ? 'active' : ''}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;