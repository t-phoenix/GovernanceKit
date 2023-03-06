import React, { useState } from 'react';
import FormField from '../components/FormField';
import '../styles/homestyle.css';
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { Web3Button } from "@thirdweb-dev/react";


// *-----dev-helper-----*
// This Screen hosts the frontend 
// to create your new token Contract


export default function CreateToken() {

    const factoryContract = "0xcfd0945117AEF6AF3676E39E4458761c845180Db"
    const [tokenForm, setTokenForm] = useState({
        token: '',
        symbol: '',
        supply: ''
    });
    const { contract, isLoading, error } = useContract(factoryContract);


    const { data } = useContractRead(contract, "getName");
    console.log("WEB3 necessities: ", isLoading, ": ", contract);
    console.log("IF error occurs: ", error);
    console.log("Read data: ", data)


    const handleFormFieldChange = (fieldName, e) => {
        setTokenForm({ ...tokenForm, [fieldName]: e.target.value })
    }

    function createTokens() {

    }

    function testFunction() {

    }


    return (
        <div className='main-content'>
            <h1>CREATE Your Own Token</h1>

            <button onClick={testFunction}>Test</button>
            <form onSubmit={createTokens} className="function-container">
                <FormField
                    labelName="Token Name"
                    placeholder="name"
                    inputType="text"
                    value={tokenForm.token}
                    handleChange={(e) => handleFormFieldChange('token', e)}
                />

                <FormField
                    labelName="symbol"
                    placeholder="initials"
                    inputType="text"
                    value={tokenForm.symbol}

                    handleChange={(e) => handleFormFieldChange('symbol', e)}
                />

                <FormField
                    labelName="supply"
                    placeholder="amount"
                    inputType="numeric"
                    value={tokenForm.supply}

                    handleChange={(e) => handleFormFieldChange('supply', e)}
                />

                {/* <button type="submit">
                    Sign Transaction
                </button> */}
            </form>
        </div>
    );
}