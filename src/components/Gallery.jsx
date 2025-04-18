import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = ({cards, setCards, onRemove}) => { // Gallery component to display the list of tour cards
    const [loading, setLoading] = useState(true); // loading state to manage the loading status of the cards
    const [error, setError] = useState(false); // error state to manage any errors during the fetch process

    const fetchCards = async () => { // function to fetch the card data from the API
        try {
            const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            const data = await res.json();
            const trimmed = data.map((card) => ({ // mapping the data to a more manageable format
                id: card.id,
                name: card.name,
                info: card.info,
                price: `Price: $${card.price}`,
                image: card.image
            }));
            setCards(trimmed); // change card state to the trimmed data
            setLoading(false); // change loading state to false
        } catch (error) {
            setError(true); // set error state to true if there is an error
            setLoading(false); // change loading state to false
        }
    }

    useEffect(() => { // useEffect to fetch the cards when the component mounts
        fetchCards();
    }, []);

    if (loading) { // when loading state is true, show loading message
        return <h2>Loading...</h2>;
    };

    if (error) { // when error state is true, show error message
        return <h2>Something went wrong...</h2>;
    };

    if (cards.length === 0) { // when there are no cards left, show no tours message and offer button to fetch cards again
        return (
        <>
            <h2>No Tours Left</h2>
            <button onClick={fetchCards}>Refresh</button>
        </>
        )
    }
        
    return ( // rendering the gallery of tour cards
        <section className='gallery'>
            {cards.map((card) => {
                return (
                    <TourCard
                        key={card.id}
                        {...card}
                        onRemove={onRemove}
                    />
                )
            })}
        </section>
    )
}

export default Gallery;