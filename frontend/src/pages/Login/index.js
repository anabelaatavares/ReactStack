import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import './styles.css';

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero"/>
        <form action="">
          <h1>Faça Login</h1>
          <input placeholder="ID" name="" id=""/>
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default Login;
