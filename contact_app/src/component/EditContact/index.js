import AddContactForm from '../form/myform'
import { useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material';

function EditContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { id } = useParams()

    console.log(name)
    console.log(email)
    console.log(phone)
    return (

        <div>
            <div>
                <h1>EditContact {id}</h1>
            </div>
            <div className="AddContactForm">

                <AddContactForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}

                />
                <div>
                    <Button type="primary" >Update</Button>
                    <Button type="primary" ><Link to='/'>Cancel</Link></Button>
                </div>
            </div>

        </div>
    )
}

export default EditContact