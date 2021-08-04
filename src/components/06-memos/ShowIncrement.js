import React from "react";

const ShowIncrement = React.memo(({ increment }) => {

    console.log("Me volvi a generar");

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>
    </div>
  );
})

export default ShowIncrement;
