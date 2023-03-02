import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/homestyle.css';
import FormField from '../components/FormField';

export default function CrowdsaleDetails() {

    const { state } = useLocation()

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
        <div>
            <div>
                <h2>Token: {state.token}</h2>
                <p>Rate: {state.rate}</p>
                <h3>beneficiary: {state.beneficiary}</h3>
            </div>

            <form onSubmit={sendTokens} className="function-container">
                <h2>Buy Tokens</h2>

                <FormField
                    labelName="amount"
                    placeholder="FTM"
                    inputType="numeric"
                    value={transferForm.amount}

                    handleChange={(e) => handleFormFieldChange('amount', e)}
                />

                <button type="submit">
                    Buy Tokens
                </button>
            </form>

            


            


        </div>
    );
}