import React, {useState} from 'react';
import FormField from '../components/FormField';
import '../styles/homestyle.css';

export default function CreateDAO(){

    const [daoForm, setDAOForm] = useState({
        delay: '',
        token: '',
    });


    const handleFormFieldChange = (fieldName, e) => {
        setDAOForm({ ...daoForm, [fieldName]: e.target.value })
    }

    function createDAO(){
        
    }


    return (
        <div className='main-content'>
            <h1>CREATE Your DAO</h1>
            <form onSubmit={createDAO} className="function-container">

                <div >
                    <p className='steps-container'>Steps to Deploy: <br/>Enter Timelock Delay(ususally 7 days) <br/> Enter Token Address <br /> Sign Transactions to Safely Deploy your DAO <br/> There will be multiple transactions to deploy contracts</p>
                </div>
                <FormField
                    labelName="Timelock Delay"
                    placeholder="seconds"
                    inputType="numeric"
                    value={daoForm.delay}
                    handleChange={(e) => handleFormFieldChange('delay', e)}
                />

                <FormField
                    labelName="token Contract"
                    placeholder="address"
                    inputType="text"
                    value={daoForm.token}

                    handleChange={(e) => handleFormFieldChange('token', e)}
                />


                <button type="submit">
                    Sign Transaction
                </button>
            </form>
        </div>
    );
}