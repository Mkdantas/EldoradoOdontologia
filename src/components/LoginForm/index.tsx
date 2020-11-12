import React from 'react';

import Input from '../Input';

import './styles.css';


interface loginInterface{
    email:any;
    setEmail:any;
    password:any;
    setPassword:any;
    handleLogin:any;
    emailError:any;
    passwordError:any;
}

const LoginForm: React.FC<loginInterface> = ({email, setEmail, password, setPassword, handleLogin, emailError, passwordError}) =>{
    return(
    <div id="page-login-form" className="container">
        <form onSubmit={handleLogin}>
            <fieldset>
                <h1> Login </h1>
                <Input name="user" label="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <p className="error" data-error={emailError ? true : false}>{emailError}</p>
                <Input name="password" label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <p className="error" data-error={passwordError ? true : false}>{passwordError}</p>
                <button type="submit">ENTRAR</button>
                <p className="forgot-password">Esqueceu a senha?</p>
            </fieldset>

        </form>
    
    </div>
    )
}

export default LoginForm;