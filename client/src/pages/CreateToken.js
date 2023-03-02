import React, {useState} from 'react';
import FormField from '../components/FormField';
import '../styles/homestyle.css';

export default function CreateToken(){

    const [tokenForm, setTokenForm] = useState({
        token: '',
        symbol: '',
        supply: ''
    });


    const handleFormFieldChange = (fieldName, e) => {
        setTokenForm({ ...tokenForm, [fieldName]: e.target.value })
    }

    function createTokens(){
        
    }


    return (
        <div className='main-content'>
            <h1>CREATE Your Own Token</h1>
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

                <button type="submit">
                    Sign Transaction
                </button>
            </form>
        </div>
    );
}