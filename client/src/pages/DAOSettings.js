import React, {useState} from 'react';
import FormField from '../components/FormField';

export default function DAOSettings(){

    const [roleForm, setRoleForm] = useState({
        role: '',
        user: ''
    })
    
    const handleFormFieldChange = (fieldName, e) => {
        setRoleForm({ ...roleForm, [fieldName]: e.target.value })
    }

    return(
        <div>
            <div>
                <p>Proposer: </p>
                <p>Executor: </p>
                <p>Timelock_Admin: </p>
            </div>
            
            <form className="function-container">
                <p>Use the hash above for checking and granting roles</p>
                <FormField
                    labelName="Role Hash"
                    placeholder="address"
                    inputType="text"
                    value={roleForm.role}
                    handleChange={(e) => handleFormFieldChange('role', e)}
                />
                <FormField 
                    labelName="User/Contract"
                    placeholder="address"
                    inputType="text"
                    value={roleForm.user}
                    handleChange={(e)=> handleFormFieldChange('user', e)}
                />
            </form>
        </div>
    )
}