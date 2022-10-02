import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import MyTable from "../table"

import { useSelector, useDispatch } from 'react-redux'

function Home() {

    const contacts = useSelector((state) => state.ContactDetails)
    console.log('contacts',contacts)


    

    return (
        <div className="Home-MDiv">
            <h1>Contact Book</h1>
            {/* <Link to={ADDCONTACT}>addcontact</Link>
            <Link to={EDITCONTACT}>addcontact</Link> */}
            <div className="Add-Cont-btn-div">
                <Link to="/addcontact" className="btn btn-outline-dark my-5 ml-auto ">
                    <Button variant="outlined">Add Contact</Button>
                </Link>
            </div>
            {/* <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/editcontact/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        // onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table> */}
          <MyTable contacts={contacts}/>
        </div>
    )
}
export default Home