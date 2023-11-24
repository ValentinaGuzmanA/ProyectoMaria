import React from 'react';
import Menu from './Menu';
import huellaicon from '../../src/images/huellaicon.jpg'
import { Link } from 'react-router-dom';
const SidebarContainer = () => {
    return (
    <aside style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="main-sidebar sidebar-dark-primary elevation-4">
  <Link to={"/Home"} className="brand-link">
    <img src={huellaicon} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="brand-text font-weight-light">Omega PetShop</span>
  </Link>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="info">
       &nbsp;
      </div>
      <div className="info">
       &nbsp;
      </div>
      <div className="info">
        <Link style={{backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} to={"/home"} className="d-block">Menu principal</Link>
      </div>
    </div>
    
    <Menu></Menu>
  </div>
</aside>

    );

}

export default SidebarContainer;