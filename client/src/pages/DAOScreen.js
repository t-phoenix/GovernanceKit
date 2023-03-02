import React from 'react';
import '../styles/homestyle.css'
import {daos} from '../constants';
import { useNavigate } from 'react-router-dom';

export default function DAOScreen(){
    const navigate = useNavigate()
    function handleDAOCard(card){
        navigate(`/dao-details/${card.name}`,{state: card} )
    }


    return (
        <div>
            <div className='heading-container'>
                <h2>All DAO</h2>
                <button onClick={()=>navigate('/create-dao')}>Create New DAO</button>
            </div>

            <div className='cards-container'>
            
                {daos.map((dao)=>
                    <div className='token-card' onClick={()=>handleDAOCard(dao)}>
                        <h2>{dao.name}</h2>
                        <p>Token: {dao.tokenAddress}</p>
                        <p>DAO Contract: {dao.governorAddress}</p>
                    </div>
                )}
            </div>
        </div>
    );
}



