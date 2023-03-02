import React from 'react';
import '../styles/homestyle.css'
import {sale} from '../constants';
import { useNavigate } from 'react-router-dom';

export default function CrowdsaleScreen(){

    const navigate = useNavigate()
    function handleTokenCard(card){
        navigate(`/crowdsale-details/${card.name}`,{state: card} )
    }

    return (
        <div>
            <div className='heading-container'>
                <h2>All Sale</h2>
                <button onClick={()=>navigate('/create-crowdsale')}>Create New Sale</button>
            </div>

            <div className='cards-container'>
            
                {sale.map((card)=>
                    <div className='token-card' onClick={()=>handleTokenCard(card)}>
                        <h2>{card.token}</h2>
                        <p>Rate: {card.rate} </p>
                        <p>{card.beneficiary}</p>
                    </div>
                )}
            </div>
            
        </div>
    );
}
