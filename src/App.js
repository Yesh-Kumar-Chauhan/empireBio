import './App.css';
import { useEffect } from 'react';
import Routing from './route';
import { BrowserRouter } from "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <BrowserRouter>
     {/* <ToastContainer /> */}
     <Header />
     <Routing />
     <Footer />
  </BrowserRouter>

  );
}

export default App;
