import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contact />}/>
            <Route path="/dentist/:id" element={<Detail />}/>
            <Route path="/favs" element={<Favs />}/>
            <Route path="*" element={<h1>Page not Found</h1>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
