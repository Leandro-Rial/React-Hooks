import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);

    reset();
  };

  return (
    <>
      <h1>Agregar todo</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender..."
          className="form-control"
          value={description}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-4 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
