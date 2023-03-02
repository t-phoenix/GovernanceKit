import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/homestyle.css';
import FormField from '../components/FormField';
import {proposals} from '../constants';

export default function DAODetails() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [transferForm, setTransferForm] = useState({
        amount: ''
    });


    const handleFormFieldChange = (fieldName, e) => {
        setTransferForm({ ...transferForm, [fieldName]: e.target.value })
    }

    async function sendTokens() {
        console.log("Sign the transaction using thirdweb sdk and Send")
    }


    return (
        <div className='main-content'>
            <div className='heading-container'>
                <div>
                    <h2>Token: {state.name}</h2>
                    <p>Rate: {state.tokenAddress}</p>
                    <p>Governor: {state.governorAddress}</p>
                    <p>Timelock: {state.timelockAddress}</p>
                </div>
                <div>
                    <button onClick={()=>navigate('/dao-settings')}>
                        Settings
                    </button>
                    <button onClick={()=>navigate('/create-proposal')}>
                        Create Proposal
                    </button>
                </div>
                
            </div>


            <h2>All Proposals</h2>
            <div className='cards-container'>
                
                {proposals.map((proposal)=>
                    <div className='token-card'>
                        <h4>{proposal.id}</h4>
                        <p>Description: {proposal.description}</p>
                        <p>Start: {proposal.start}</p>
                        <p>End: {proposal.end}</p>
                        <p>Status: {proposal.status}</p>
                    </div>
                )}

            </div>

            


            


        </div>
    );
}