import React from 'react';
import '../styles/homestyle.css'
import {tokens} from '../constants';
import { useNavigate } from 'react-router-dom';
import { useAddress, useContract } from "@thirdweb-dev/react";

// *--------dev-helper--------*
// This is TOKEN LIST SCREEN
// Create new ERC20 Token or Navigate to already created tokens on PLatform

export default function TokenScreen(){

    const factoryContract = "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F"
    const navigate = useNavigate()
    function handleTokenCard(card){
        navigate(`/token-details/${card.name}`,{state: card} )
    }

    const address = useAddress();
    console.log("Connected Address: ", address);

    const { contract, isLoading, error } = useContract(factoryContract);
    console.log("Factory Contract: ", contract)


    return (
        <div>
            <div className='heading-container'>
                <h2>All Tokens </h2>
                <p>Factory: <a href="https://ftmscan.com/address/0x9BbBDc65F4E445861A7398ea3441A8F29A39220f" target="_blank">{factoryContract}</a></p>
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