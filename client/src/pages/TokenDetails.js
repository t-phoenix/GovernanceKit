import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/homestyle.css';
import FormField from '../components/FormField';

export default function TokenDetails() {

    const { state } = useLocation()

    const [transferForm, setTransferForm] = useState({
        sendTo: '',
        amount: ''
    });


    const handleFormFieldChange = (fieldName, e) => {
        setTransferForm({ ...transferForm, [fieldName]: e.target.value })
    }

    async function sendTokens() {
        console.log("Sign the transaction using thirdweb sdk and Send")
    }


    return (
        <div>
            <div>
                <h2>Token: {state.name}</h2>
                <p>Token Supply: {state.totalSupply} {state.symbol}</p>
                <h3>Owner: {state.owner}</h3>
            </div>

            <form onSubmit={sendTokens} className="function-container">
                <FormField
                    labelName="send to"
                    placeholder="Address"
                    inputType="text"
                    value={transferForm.sendTo}
                    handleChange={(e) => handleFormFieldChange('sendTo', e)}
                />

                <FormField
                    labelName="amount"
                    placeholder={state.symbol}
                    inputType="numeric"
                    value={transferForm.amount}

                    handleChange={(e) => handleFormFieldChange('amount', e)}
                />

                <button type="submit">
                    Sign Transaction
                </button>
            </form>

            


            


        </div>
    );
}