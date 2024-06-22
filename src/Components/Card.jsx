import React from "react";
import { Link } from "react-router-dom";


const Card = ({ item, children }) => {
  

  return (
    <div className="card">
      <img className="card" src="../../public/images/doctor.jpg" alt="Odontologo" />
      <Link to={"/dentist/" + item.id}>
        <h3>{item.name}</h3>
      </Link>
      <p>{item.username}</p>
      {children}
    </div>
  );
};

export default Card;
