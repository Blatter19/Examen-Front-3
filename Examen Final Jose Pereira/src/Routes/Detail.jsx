import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDentistContext } from '../Components/utils/global.context';


const Detail = () => {
  const { id } = useParams();
  const { state } = useDentistContext();
  const { dentists } = state;
  const navigate = useNavigate();

  const dentist = dentists.find(dentist => dentist.id === parseInt(id));

  if (!dentist) {
    return (
      <>
        <div className='card-center'>
          <p>Dentista no encontrado</p>
        </div>
        <div className='card-center'>
          <button onClick={() => navigate(-1)}>Atrás</button>
        </div>
      </>
      
    )
    
  }
    
  
  return (
    <div className='component-center'>
      <div>
        <h1>Dentista numero {id}</h1>
      </div>

      <div className='card-center'>
        <p>Nombre: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Teléfono: {dentist.phone}</p>
        <p>Sitio web: {dentist.website}</p>
      </div>

      <div>
        <button onClick={() => navigate(-1)}>Atrás</button>
      </div>
    </div>
  )
}

export default Detail