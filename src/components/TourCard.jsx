import React, { useState } from 'react';
import '../styles/styles.css';;

const TourCard = ({ id, name, info, price, image, onRemove }) => { // TourCard component to display individual tour cards

    const [readMore, setReadMore] = useState(false); // establishes readMore as state that is initially false

    const safeInfo = info || "No info available"; // sets safeInfo to info or a message if info is not available

    return ( // rendering the TourCard component, including CSS classes
        <article className="tour-card">
            <div className='tour-card-content'>
            <h3 className='tour-card-title'>{name}</h3>
            <h5 className='tour-card-price'>{price}</h5>
            </div>
            <img src={image} alt={name} />
            <div className='tour-card-content'>
            <p className='tour-card-info'> {/* rendering of info based on readMore state */}
                {(readMore ? safeInfo : safeInfo.slice(0, 80)+ `...`)}
                <button className='read-toggle-btn' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            <button className="btn-remove" onClick={() => { // Button to remove the tour card on click
                onRemove(id)
            }}>Not Interested</button>
            </div>
        </article>
    )
}

export default TourCard;