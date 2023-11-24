import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import data from "../../bd.json";

const Login = () => {
  // Esta sirve para redirecconar de un componente a otro
  const navigate = useNavigate();

  // Estado inicial de las variables
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const iniciarSesion = async () => {
    if (password.length < 6) {
      const msg = "La contraseña debe tener mínimo 6 caracteres";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      const usuario = data.Usuarios.find(Usuarios => Usuarios.email === email);
  
      if (usuario) {
        if (usuario.password === password) {
          const msg = "Inicio de sesión exitoso";
          swal({
            title: "Éxito",
            text: msg,
            icon: "success",
            buttons: {
              confirm: {
                text: "Ok",
                value: true,
                visible: true,
                className: "btn btn-success",
                closeModal: true,
              },
            },
          });

          // Redireccionar al home
          navigate("/Home");
        } else {
          const msg = "Contraseña incorrecta. Por favor, inténtelo de nuevo.";
          swal({
            title: "Error",
            text: msg,
            icon: "error",
            buttons: {
              confirm: {
                text: "Ok",
                value: true,
                visible: true,
                className: "btn btn-danger",
                closeModal: true,
              },
            },
          });
        }
      } else {
        const msg = "Correo electrónico no encontrado. Por favor, regístrese si es un nuevo usuario.";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      }
    }
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  return (
   
    <div style={{backgroundColor : "#A0BBEB",  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed"}}
    className="hold-transition login-page">
    
    <div className="login-box">
      <div className="login-logo">
        <Link to={"#"} style={{fontSize:"50px", color: "#0000000"}}><b style={{fontSize:"70px"}}>Omega</b>PetShop</Link>
      </div>
     
      <div className="card" >
        <div className="card-body login-card-body">
          <p className="login-box-msg">Bienvenido, ingrese sus credenciales para iniciar sesión</p>
    
          <form  onSubmit={onSubmit}>
            <div  className="input-group mb-3">
              <input style={{color: "#5351EE", borderColor: "#5351EE"}} type="email" 
              className="form-control" 
              placeholder="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span style={{color: "#5351EE", borderColor: "#5351EE"}}  className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input style={{color: "#5351EE", borderColor: "#5351EE"}} type="password"
               className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span style={{color: "#5351EE"}} className="fas fa-lock" ></span>
                </div>
              </div>
            </div>
            
          
    
          <div className="social-auth-links text-center mb-3">
            <button style={{backgroundColor: "#5351EE", borderColor : "#5351EE", color: "black"}} type="submit" className="btn btn-block btn-primary" > Ingresar
            </button>
            <Link to={"crear-cuenta"} style={{backgroundColor: "#5351EE", borderColor : "#5351EE", color: "black"}} type="submit" className="btn btn-block btn-danger" > Crear cuenta
            </Link>
          </div>
          </form>
         
    
        </div>
    
      </div>
    </div>
    </div>);
}

export default Login;