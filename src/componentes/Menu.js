import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return ( 
       
    <div style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}}  >
    <nav style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="mt-2" >
    <ul  style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

      <li style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="nav-item">
        <Link style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} to={"/Home"} className="nav-link">
          <i className="nav-icon fas fa-home" />
          <p>
            Inicio
           
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link  style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} to={"/productosPet"} className="nav-link">
          <i className="nav-icon fas fa-th" />
          <p >
            Productos
           
          </p>
        </Link>
      </li>
           
          
    </ul>
    
  </nav>
  </div>
  );


}
 
export default Menu;