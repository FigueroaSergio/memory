
import { Link } from "react-router-dom";

import "./Landing.css"
function Landing({logo,title,description, action}){
    return(
        <>  <div className="container-fluid">
            <div className="row landing">
                <div className="col-12 ps-4 ps-sm-5 ">
                    <h1><img src={logo} alt="logo game"/><br/>{title}</h1>
                </div>
                <div className="col-12 description ps-4 ps-sm-5 ">
                    <span>Description</span>
                    <p>
                        {description}
                    </p>
                    <Link className="btn btn-primary" to="/memory/game">Play</Link>
                    <p><Link  to="/memory/form">Register</Link></p>
                    
                </div>
            </div>
            </div>
        </>
    )

}
export {Landing}