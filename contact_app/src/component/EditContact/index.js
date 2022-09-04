import AddContactForm from '../form/myform'
import { useState } from "react"
function EditContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    console.log(name)
    console.log(email)
    console.log(phone)
    return (

        <div>
            <div>
                <h1>EditContact</h1>
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
            </div>

        </div>
    )
}

export default EditContact