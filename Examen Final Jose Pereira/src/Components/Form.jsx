import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [paciente, setpaciente] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) => 
    setpaciente({...paciente, nombre: event.target.value});

  const handleEmail = (e) => 
    setpaciente({...paciente, email: e.target.value});
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      paciente.nombre.trim().length > 5 &&
      validateEmail(paciente.email)     
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow (false);
    }
  }

  return (
    <div className="component-center">
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value={paciente.nombre} onChange={handleName}/>
        <label>Email</label>
        <input type="email" value={paciente.email} onChange={handleEmail}/>
        <div className="component-center">
          <button>Enviar</button>
        </div>
      </form>

      

      {show && <p style={{color: "green"}}>Gracias {paciente.nombre}, te contactaremos cuanto antes vía mail</p>}
      {error && (
        <p style={{color: "red"}}>
          Por favor verifique su información nuevamente
        </p>
      )}
    </div>
  );
};


export default Form;
