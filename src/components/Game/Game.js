import { useEffect, useContext } from "react";
import * as bootstrap from "bootstrap";

import { Table } from "../Table/Table";
import { Modal } from "../Modal/Modal";
import { Context } from "../../context/Context";

function Game({ children }) {
  let { win, restarGame } = useContext(Context);

  useEffect(() => {
    //console.log(win);
    if (win) {
      var myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      myModal.show();
    }
  }, [win]);

  return (
    <>
      <Table />
      {win ? (
        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <div className="row my-3  row-cols-4 justify-content-end">
              <div className="col text-center">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => restarGame()}
                >
                  Restart
                </button>
              </div>
              <div className="col text-center">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Modal
        action="hey"
        title="Congratulations"
        description="Send"
        id="exampleModal"
      >
        <form>
          <div className="mb-3 text-center">
            <p>You win, send us the data for statistics</p>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="@"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
export { Game };
