
import "./Timer.css"

function Timer({time}) {
    
    return (
        <>
            <div className="row timer">
                <span>{time}s</span>
            </div>
        </>
    )
}
export { Timer }