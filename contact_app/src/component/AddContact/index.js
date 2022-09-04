import AddContactForm from '../form/myform'
import { useState } from "react"
function AddContact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    console.log(name)
    console.log(email)
    console.log(phone)
    return(
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

        </div>
    )
}
export default AddContact