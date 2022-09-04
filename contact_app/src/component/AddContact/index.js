import AddContactForm from '../form/myform'
import { useState } from "react"
import { Button } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const mystate = useSelector((state)=>state)



    console.log(mystate)
    console.log(email)
    console.log(phone)
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

                />
            </div>
            <div>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </div>

        </div >
    )
}
export default AddContact