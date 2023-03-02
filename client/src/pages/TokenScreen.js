import React from 'react';
import '../styles/homestyle.css'
import {tokens} from '../constants';
import { useNavigate } from 'react-router-dom';

export default function TokenScreen(){

    const navigate = useNavigate()
    function handleTokenCard(card){
        navigate(`/token-details/${card.name}`,{state: card} )
    }

    return (
        <div>
            <div className='heading-container'>
                <h2>All Tokens</h2>
                <button onClick={()=>navigate('/create-token')}>Create New Token</button>
            </div>

            <div className='cards-container'>
            
                {tokens.map((card)=>
                    <div className='token-card' onClick={()=>handleTokenCard(card)}>
                        <h2>{card.name}</h2>
                        <p>Token Supply: {card.tokenSupply}  {card.symbol}</p>
                        <p>{card.owner}</p>
                    </div>
                )}
            </div>
        </div>
    );
}