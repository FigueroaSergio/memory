import {useEffect, useContext} from "react"
import {Modal} from "bootstrap/js/dist/modal"

import { Table } from "../Table/Table"
import { MModal } from "../MModal/MModal"
import {Context} from "../../context/Context"

function Game({children}) {
    let {win}= useContext(Context)
    
   useEffect(()=>{
    //    console.log(win);
    //    if(win){
    //        console.log("hey");
    //     var myModal = Modal(document.getElementById('myModal'))
    //     myModal.show()
    //    }
        
   },[win])
    
    return(
        <>
      
            <Table/>
            <button type="button" className ="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button>
            <MModal action="hey" title="Congratulations" description="Send" id="exampleModal">
               
                <form>
                <div className="mb-3 text-center">
                    <p>You win, send us the data for statistics</p>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="@"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                </form>
            </MModal>


        </>
    )
}
export {Game};