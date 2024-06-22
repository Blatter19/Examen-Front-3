import { useEffect } from 'react';
import Card from '../Components/Card'
import { useDentistContext } from '../Components/utils/global.context'

const Home = () => {
  const { state, dispatch } = useDentistContext();

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  return (
    <>
      <h1>Home</h1>
      <div className='card-grid'>
          {state.dentists.map((dentist) => (
          <Card item={dentist} key={dentist.id}>
          <button onClick={()=> dispatch({type: "ADD_FAVS", payload: dentist})} >
            ⭐
          </button>
          </Card>
          ))}
            
      </div>
    </>
      
  )
}

export default Home