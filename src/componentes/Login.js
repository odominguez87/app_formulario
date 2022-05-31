import React from "react";
import "../estilos/Login.css"


function Login() {
    return(
        <div className="Login">
            <div class="card" id="contenedorLogin">
            <div class="card-header">
                <h1>LOGIN</h1>
            </div>
            <div class="card-body">
                <div className="groupUsuario input-group mb-3">
                    <input className="txtUsuario form-control" placeholder="USUARIO" />
                </div>
                <div className="groupContrasenia input-group mb-3">
                    <input className="txtContrasenia form-control" type={'password'} placeholder="CONTRASEÑA" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btnLogin btn btn-primary" type="button">INICIO</button>
                </div>
            </div>
            <div class="card-footer text-muted">
                Derechos reservados
            </div>
        </div>
        </div>
    );
};

export default Login