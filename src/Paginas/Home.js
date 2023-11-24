import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';
import ContentHeader from '../componentes/contentHeader';
import Footer from '../componentes/footer';
import { Link } from 'react-router-dom';
import huellaicon from '../../src/images/huellaicon.jpg'



const Home = () => {
    return(
        <div  className="wrapper">
            <Navbar ></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader 
                    titulo={"Bienvenido"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"Home"}
                    
                />

              

                    <section style={{backgroundColor : "#A0BBEB",backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                    className="content" >
                    <div className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="inner">
                            <h3>Juguetes para perros</h3>

                            <p>&nbsp;</p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>Los juguetes masticables permitirán al perro soltar energía y no emprenderla con el mobiliario de casa. Los juguetes para perros con forma de cuerda y en los que el can tira de un extremo y su humano del otro.</p>
                        </div>
                        </div>
                    </section>
                    <section  style={{backgroundColor : "#A0BBEB", backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                className="content">
                    
                    <div img src={huellaicon}className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="inner">
                            <h3>Comida para perros</h3>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>La comida para perros es un alimento preparado específicamente para satisfacer las necesidades fisológicas de los perros y otros animales similares. </p>
                        </div>
                        </div>
                    </section>


                    <section style={{backgroundColor : "#A0BBEB",  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                    className="content">
                    <div className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#A0BBEB", borderColor : "#A0BBEB", color: "black"}} className="inner">
                            <h3>Accesorios para perros </h3>

                            <p>&nbsp;</p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>Te ofrecemos un resumen de los productos necesarios para tener un equipamiento básico.
Accesorios para perros: camas y cestas. Es un accesorio esencial que todo perro debe tener en casa.</p>
                        </div>
                        </div>
                    </section>

                    

                    
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;