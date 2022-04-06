import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";

import "./Form.css";
import { Modal } from "../Modal/Modal";

function Form() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    age: 0,
    work: "",
    sex: "",
    sport: "",
  });
  const [message, setMessage] = useState({
    title: null,
    message: [],
    action: () => {},
    description: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myModal = new bootstrap.Modal(document.getElementById("userModal"));
    formData.age = parseInt(formData.age);

    let res = await fetch("http://localhost:4000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    res = await res.json();
    if (res.error) {
      setMessage({ message: res.message, title: "Error" });
      myModal.show();
    } else {
      setMessage({
        message: ["User create"],
        title: "Success",
        action: () => closeModal(myModal),
        description: "Play",
      });
      myModal.show();
    }
  };
  const closeModal = (modal) => {
    modal.hide();
    navigate("../memory/game");
  };

  const handleChange = (e) => {
    const updateData = { ...formData, [e.target.name]: e.target.value };
    //console.log(updateData);
    setFormData(updateData);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center form my-md-4">
          <div className="col-md-5 col-lg-4">
            <div className="py-5 px-3">
              <h1>Personal data</h1>
            </div>
            <form className="px-3" id="formUser" onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="htmlForm-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sport" className="form-label">
                  Sport
                </label>
                <select
                  className="form-select"
                  name="sport"
                  aria-label="Default select example"
                  onChange={handleChange}
                >
                  <option defaultValue>None</option>
                  <option value="1">gym</option>
                  <option value="2">swim</option>
                  <option value="3">karate</option>
                  <option value="4">soccer</option>
                  <option value="5">tennis</option>
                  <option value="6">bike</option>
                  <option value="7">run</option>
                  <option value="3">volleyball</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="work" className="form-label">
                  Work
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="work"
                  name="work"
                  value={formData.work}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sport" className="form-label">
                  Sex
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="sex-male"
                    value="male"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="sex-male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="sex-female"
                    value="female"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="sex-female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="sex-other"
                    value="other"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="sex-other">
                    Other
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal
        title={message.title}
        action={message.action}
        description={message.description}
        id="userModal"
      >
        {message.message.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
      </Modal>
      )
    </>
  );
}
export { Form };
