import React from 'react';
import './Content.css';

const Content = ({row = 3, col = 4}) => {
    const grid = Array.from(Array(row*col).keys());

    return(
        <div className='content' style={{gridTemplateRows: `repeat(${row}, 1fr)`, gridTemplateColumns: `repeat(${col}, 1fr)`}}>
            {grid.map((_, idx) => {
                return (
                    <div key={idx} className='video-box'>
                        <div className='plus-icon'>+</div>
                    </div>
                )
            })}

        </div>
    )
}

export default Content;