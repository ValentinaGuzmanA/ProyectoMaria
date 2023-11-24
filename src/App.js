import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login'
import CrearCuenta from './Paginas/auth/crearCuenta'
import Home from './Paginas/Home'
import Productos from './Paginas/productos/productosPet'

function App(){
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}> </Route>
          <Route path="/Home" exact element={<Home/>}> </Route>
          <Route path="/productosPet" exact element={<Productos/>}> </Route>
          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;