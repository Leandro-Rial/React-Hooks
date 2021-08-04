import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./effects.css";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("helouda");
  }, []);

  useEffect(() => {
    // console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio");
  }, [email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]:value })
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          autoFocus="on"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="test@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      { (name === "123") && <Message /> }
    </>
  );
};

export default SimpleForm;
