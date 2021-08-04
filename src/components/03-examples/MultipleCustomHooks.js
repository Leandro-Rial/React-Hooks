import React from "react";
import "../02-useEffect/effects.css";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreackingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-4">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-success" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
