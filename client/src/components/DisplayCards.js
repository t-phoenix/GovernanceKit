import React from 'react';
import '../styles/homestyle.css';
import { useNavigate } from 'react-router-dom';

export default function DisplayCards({title, cards}){
    const navigate = useNavigate();

    function handleNavigate(link){
        navigate(link)
    }
    return(
        <div>
            {/* <p>Display Cards Component</p> */}
            <h1>{title}</h1>

            <div className='cards-container'>
                {cards.map((card)=>
                    <div className='single-card' onClick={()=>handleNavigate(card.link)}>
                         <h2>{card.heading}</h2>
                        <p>{card.description}</p>
                        <p>{card.status}</p>
                    </div>
                )}
            </div>
        </div>
    )

}