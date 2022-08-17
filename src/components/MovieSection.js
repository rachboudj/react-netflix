import React from 'react';
import "./MovieSection.css";

function MovieSection({title, items}) {
    return (
        <div>
            <h2>{title}</h2>
            <div className='movieRow--listarea'></div>
        </div>
    );
}

export default MovieSection;