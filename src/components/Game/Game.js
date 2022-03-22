import {useEffect, useContext} from "react"
import * as bootstrap from "bootstrap"

import { Table } from "../Table/Table"
import { Modal } from "../Modal/Modal"
import {Context} from "../../context/Context"

function Game({children}) {
    let {win}= useContext(Context)
    
   useEffect(()=>{
    console.log(win);
       if(win){
           console.log("hey");
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
        myModal.show()
       }
        
   },[win])
    
    return(
        <>
      
            <Table/>
            {win?
            <div className="container my-2">
                <div className="row  justify-content-end">
                    <div className="col-3">
                    <button type="button" className ="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Finish
                    </button>
                    </div>
                </div>
            </div>
            :null
            }
            
            <Modal action="hey" title="Congratulations" description="Send" id="exampleModal">
                <form>
                <div className="mb-3 text-center">
                    <p>You win, send us the data for statistics</p>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="@"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                </form>
            </Modal>
        </>
    )
}
export {Game};