import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';

import './styles.css';


const LoginForm = () =>{
    return(
    <div id="page-login-form" className="container">
        <form>
            <fieldset>
                <h1> Login </h1>
                <Input name="user" label="Usuário"/>
                <Input name="password" label="Senha" type="password"/>
                <Link to="/painel" className="log-in">
                <button type="submit">ENTRAR</button>
                </Link>
                <p className="forgot-password">Esqueceu a senha?</p>
            </fieldset>

        </form>
    
    </div>
    )
}

export default LoginForm;