import { BrowserRouter/* , Routes, Route */ } from 'react-router-dom';

// import Contact from "./Pages/Contact"
import Header from "./components/Header";
import App from "./App";

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      {/* <Routes>
        <Route path="/Pages/Contact" element={ <Contact /> } />
      </Routes> */}
    </BrowserRouter>
  )
}
export default RoutesApp;