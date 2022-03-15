import {Card} from "../Card/Card"
function Table(){
    const x=[1,2,3,4,5,6,7,8]   
    return (
        <>
            <div className="row row-cols-4 g-3 ">
                {x.map(ele=>(
                    <Card src={ele} />
                ))}

            </div>
        </>
    )
}
export { Table }