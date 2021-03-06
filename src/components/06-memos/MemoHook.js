import React, { useMemo, useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-outline-success" onClick={increment}>
        +1
      </button>

      <button className="btn btn-primary ml-3" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
