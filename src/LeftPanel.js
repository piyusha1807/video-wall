import React, { useState } from 'react';
import './LeftPanel.css';

const LeftPanel = ({onChange}) => {
    const [row, setRow] = useState(1);
  const [col, setCol] = useState(1);



    return(
        <div className='left-panel'>
        <h4>
            Create Video Wall
        </h4>
        <div className='input-container'>

        <div className='input-box'>Row<input type='number' value={row} onChange={(e) => setRow(e.target.value)} /></div>
        <div className='input-box'>Column<input type='number' value={col} onChange={(e) => setCol(e.target.value)} /></div>
        <button onClick={() => onChange(row, col)}>Create</button>
        </div>
    </div>
    )
}

export default LeftPanel;