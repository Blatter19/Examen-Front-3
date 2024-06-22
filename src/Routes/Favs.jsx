import React from "react";
import Card from "../Components/Card";
import { useDentistContext } from '../Components/utils/global.context'

const Favs = () => {
  const { state, dispatch } = useDentistContext();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {state.favs.map((dentist) => (
          <Card item={dentist} key={dentist.id}>
            <button onClick={() => dispatch({ type: "DELETE_FAVS", payload: dentist })}>
              ❌
            </button>
          </Card>
      ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
