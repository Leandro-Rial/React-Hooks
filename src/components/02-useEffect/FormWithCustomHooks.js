import React, { useEffect } from "react";
import "./effects.css";
import useForm from "../hooks/useForm";

const FormWithCustomHooks = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Email Cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHooks</h1>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHooks;
