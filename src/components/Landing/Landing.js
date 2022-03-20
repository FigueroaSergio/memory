import "./Landing.css"
function Landing({logo,title,description, action}){
    return(
        <>
            <div className="row landing">
                <div className="col-12">
                    <h1><img src={logo}/><br/>{title}</h1>
                </div>
                <div className="col-12 description">
                    <span>Description</span>
                    <p>
                        {description}
                    </p>
                    <button className="btn btn-primary">Empezar</button>
                </div>
            </div>
        </>
    )

}
export {Landing}