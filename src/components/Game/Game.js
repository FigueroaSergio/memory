import { useEffect, useContext, useState } from "react";
import * as bootstrap from "bootstrap";

import { Table } from "../Table/Table";
import { Modal } from "../Modal/Modal";
import { Context } from "../../context/Context";

function Game({ children }) {
  let { win, restarGame, moves } = useContext(Context);
  let [email, setEmail] = useState("");
  const [modal, setModal] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (loading) {
      setLoading(false);
      let res = await fetch(`${process.env.REACT_APP_MONGO_URL}game`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, moves: moves }),
      });
      res = await res.json();
      setLoading(true);
      if (res.error) {
        setMessage(res.message[0]);
      } else {
        setMessage("Thanks");
        restarGame();
        modal.hide();
      }
    }
  };
  useEffect(() => {
    //console.log(win);
    if (win) {
      var myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      setModal(myModal);
      myModal.show();
    }
  }, [win, setModal]);

  return (
    <>
      <div className="container full-width">
        <Table />

        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <div className="row my-3 g-2 row-cols-4 justify-content-end">
              <div className="col text-center">
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={() => restarGame()}
                >
                  Restart
                </button>
              </div>
              {win ? (
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn btn-primary "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Finish
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <Modal title="Congratulations" description="Send" id="exampleModal">
          <form onSubmit={handelSubmit}>
            <div className="mb-3 text-center">
              <p>You win, send us the data for statistics</p>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="@"
                onChange={handleChange}
                value={email}
                required
              />
              <div id="emailHelp" className="form-text">
                {message ? message : null}
              </div>
            </div>
            {!loading ? (
              <div className="d-flex justify-content-center">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            ) : null}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!loading}
            >
              Send{" "}
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
}
export { Game };
