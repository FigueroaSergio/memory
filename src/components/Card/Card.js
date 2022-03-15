function Card ({src, active , clic}){
    return(
        <>
            <div className="col ">
                <div  className="card" role="button">
                    {src}
                </div>
                
            </div>
        </>
    )
}
export { Card }