import AddContactForm from '../form/myform'
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'


function EditContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { id } = useParams()
    const contacts = useSelector((state) => state.ContactDetails)

    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
    );

    useEffect(() => {
        if (currentContact) {

            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }
    }, [currentContact]);

    return (

        <div>
            <div>
                <h1>EditContact {id}</h1>
            </div>
            {currentContact ? (
                <>
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
                </>
            ) :
                (
                    <h1 className="text-center">No Contact Found</h1>

                )}


        </div>
    )
}

export default EditContact