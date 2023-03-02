import React, {useState} from 'react';
import FormField from '../components/FormField';
import '../styles/homestyle.css';

export default function CreateProposal(){

    const [proposalForm, setProposalForm] = useState({
        token: '',
        receiver: '',
        amount: '',
        description: ''
    });


    const handleFormFieldChange = (fieldName, e) => {
        setProposalForm({ ...proposalForm, [fieldName]: e.target.value })
    }

    function createDAOProposal(){
        console.log("Create new proposal")
    }


    return (
        <div className='main-content'>
            <h1>CREATE New Proposal</h1>
            <form onSubmit={createDAOProposal} className="function-container">

                <div >
                    <p className='steps-container'>Enter Propsal Details</p>
                </div>
                <FormField
                    labelName="Token Contract"
                    placeholder="address"
                    inputType="text"
                    value={proposalForm.token}
                    handleChange={(e) => handleFormFieldChange('token', e)}
                />

                <FormField
                    labelName="Receiver"
                    placeholder="address"
                    inputType="text"
                    value={proposalForm.receiver}

                    handleChange={(e) => handleFormFieldChange('receiver', e)}
                />

                <FormField
                    labelName="Amount"
                    placeholder="in above token"
                    inputType="numeric"
                    value={proposalForm.amount}

                    handleChange={(e) => handleFormFieldChange('amount', e)}
                />

                <FormField
                    labelName="Description"
                    placeholder="explain"
                    inputType="text"
                    value={proposalForm.description}
                    isTextArea

                    handleChange={(e) => handleFormFieldChange('description', e)}
                />


                <button type="submit">
                    Submit Proposal
                </button>
            </form>
        </div>
    );
}