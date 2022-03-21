
import { Link } from "react-router-dom";

import "./Landing.css"
function Landing({logo,title,description, action}){
    return(
        <>
            <div className="row landing">
                <div className="col-12">
                    <h1><img src={logo} alt="logo game"/><br/>{title}</h1>
                </div>
                <div className="col-12 description">
                    <span>Description</span>
                    <p>
                        {description}
                    </p>
                    <Link className="btn btn-primary" to="/memory/game">Invoices</Link>
                   
                </div>
            </div>
        </>
    )

}
export {Landing}