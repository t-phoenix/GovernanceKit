import React, {useState}  from 'react';
import FormField from '../components/FormField';
import '../styles/homestyle.css';



export default function CreateCrowdsale(){

    const [saleForm, setSaleForm] = useState({
        token: '',
        rate: '',
        beneficiary: ''
    });


    const handleFormFieldChange = (fieldName, e) => {
        setSaleForm({ ...saleForm, [fieldName]: e.target.value })
    }

    function createTokens(){
        console.log("Create crwodsale by signing the transaction")
    }


    return (
        <div className='main-content'>
            <h1>SELL your Tokens on our IDO Launchpad</h1>
            <form onSubmit={createTokens} className="function-container">
                <FormField
                    labelName="Token Address"
                    placeholder="token contract address"
                    inputType="text"
                    value={saleForm.token}
                    handleChange={(e) => handleFormFieldChange('token', e)}
                />

                <FormField
                    labelName="Sale Rate"
                    placeholder="token/ FTM"
                    inputType="numeric"
                    value={saleForm.rate}

                    handleChange={(e) => handleFormFieldChange('rate', e)}
                />

                <FormField
                    labelName="Beneficiary"
                    placeholder="funds go to"
                    inputType="text"
                    value={saleForm.beneficiary}

                    handleChange={(e) => handleFormFieldChange('beneficiary', e)}
                />

                <button type="submit">
                    Sell tokens
                </button>
            </form>
        </div>
    );
}





