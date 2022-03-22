
function Modal({children,title , action, description,id }){
    return(
        <>
        <div className="modal fade"  id={id}tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalLabel">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row justify-content-center">
                    {children}
                </div>
              </div>
              {action?<div className="modal-footer">
                <button type="button" className="btn btn-primary">{description?description:"Save"}</button>
              </div>:null}
            </div>
          </div>
        </div>
        </>
    )
}
export { Modal }