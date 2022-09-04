import { Link } from "react-router-dom"
import { Button } from "@mui/material"


function Home() {


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
        </div>
    )
}
export default Home