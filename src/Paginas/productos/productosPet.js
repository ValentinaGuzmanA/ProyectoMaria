import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/contentHeader';
import Footer from '../../componentes/footer';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke'

const productosPet = () => {

   

    return(
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
    
            <ContentHeader
                titulo={"Productos"}
                breadCrumb1={"Inicio"}
                breadCrumb2={"Dashboard"}
                ruta1={"Home"}
            />

            <section className="content">

            <div class="card">
            <div class="card-header">
            <h3 class="card-title">Title</h3>
            <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
            <i class="fas fa-times"></i>
            </button>
            </div>
            </div>
            <div class="card-body">
                <table className="table table-success table-striped">
                <thead>
                <tr>
                    <th style={{width : '10%' }}>Id</th>
                    <th style={{width : '70%' }}>Producto</th>
                    <th style={{width : '20%' }}>Opciones</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                </tbody> 
                </table>
            </div>
            
            
            
            </div>
            </section>
            </div>
    
    
    <Footer></Footer>
    </div>

    )
}

export default productosPet;