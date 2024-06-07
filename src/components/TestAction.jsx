import { useState, useRef } from "react";

const TestAction = () => {
  const [nom, setNom] = useState(null);
  const ref = useRef();
  console.log(nom);
  return (
    <>
      <input ref={ref} placeholder="nom" />
      <button onClick={() => setNom(ref.current.value)}>Soumettre</button>
      {nom ? <h1>{nom}</h1> : null}
    </>
  );
};

export default TestAction;
