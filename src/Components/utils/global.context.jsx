import { createContext, useContext, useEffect, useReducer } from "react";

const DentistContext = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  dentists: [{
    id: 1,
    name: "José Pereira",
    username: "jpereira",
    email: "jpereira@gmail.com",
    phone: 94223415,
    website: "www.jpereira.com"
  },
  {
    id: 2,
    name: "Optimus Prime",
    username: "oprime",
    email: "oprime@gmail.com",
    phone: 94997632,
    website: "www.oprime.com"
  },
  {
    id: 3,
    name: "Tony Stark",
    username: "ironman",
    email: "ironman@gmail.com",
    phone: 94365252,
    website: "www.ironman.com"
  },
  {
    id: 4,
    name: "Bruce Wayne",
    username: "batman",
    email: "batman@gmail.com",
    phone: 91515446,
    website: "www.batman.com"
  },
  {
    id: 5,
    name: "Clark Kent",
    username: "superman",
    email: "superman@gmail.com",
    phone: 93565451,
    website: "www.superman.com"
  },
  {
    id: 6,
    name: "Ash Ketchup",
    username: "paleta",
    email: "paleta@gmail.com",
    phone: 94515113,
    website: "www.paleta.com"
  },
  {
    id: 7,
    name: "Leonardo Dicaprio",
    username: "titanic",
    email: "titanic@gmail.com",
    phone: 98454231,
    website: "www.titanic.com"
  },
  {
    id: 8,
    name: "Dr. House",
    username: "house",
    email: "house@gmail.com",
    phone: 95465451,
    website: "www.house.com"
  }],
  dentist: {},
  favs: lsFavs,
  theme: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, dentist: action.payload};
    case "ADD_FAVS":
      if (state.favs.some(dentist => dentist.id === action.payload.id)) {
        return {...state, error: 'El dentista ya se encuentra en favoritos'}
      }
      return { ...state, favs: [...state.favs, action.payload], error: null };
    case "DELETE_FAVS":
      const filterfavs = state.favs.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, favs: filterfavs };
    case "CHANGE_THEME":
      return { ...state, theme: !state.theme };
    case "CLEAR_ERROR":
      return { ...state, error: null }
    default:
      throw new Error("Error al modificar el estado")
  }
}

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs])

  useEffect(() => {
    if (state.theme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [state.theme]);

  useEffect(() => {
    if (state.error) {
      const timer = setTimeout(() => {
        dispatch({ type: 'CLEAR_ERROR' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.error]);

  return (
    <DentistContext.Provider value={{state, dispatch}}>
      {children}
    </DentistContext.Provider>
  );
};

export default Context;

export const useDentistContext = () => useContext(DentistContext);
