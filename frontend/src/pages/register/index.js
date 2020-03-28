import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import './styles.css';
import logoImg from '../../assets/logo.svg'

function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Registo</h1>
          <p>aqui</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho registo
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" name="" id=""/>
          <input type="email" placeholder="Email"/>
          <input placeholder="WhatsApp"/>

          <div className="input-group">
            <input placeholder="cidade" name="" id=""/>
            <input placeholder="UF" style={{ width: 80, height:60 }}/>
          </div>

          <button className="button" type="submit">Registar</button>
        </form>
      </div>
  </div>
  );
}

export default Register;
