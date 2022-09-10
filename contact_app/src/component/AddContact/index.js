import AddContactForm from '../form/myform'
import { useState } from "react"
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const contacts = useSelector((state) => state.ContactDetails)
    console.log('contacts', contacts)

    const checkEmailIsExist = contacts.find(contact => contact.email === email && email);
    console.log('checkEmailIsExist', checkEmailIsExist)
    if (checkEmailIsExist) {
        // return toast.error('Email Exist')
    }


    return (
        <div>
            <h1>AddContact</h1>
            <div className="AddContactForm">

                <AddContactForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                // handleSubmit={handleSubmit()}

                />
            </div>
            <div>

                {/* <Button type="primary" onClick={() => notify()} htmlType="submit">
                    Submit
                </Button> */}
            </div>

        </div >
    )
}
export default AddContact