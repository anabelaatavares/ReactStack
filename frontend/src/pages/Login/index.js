import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from "../../services/api";

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import './styles.css';

function Login() {
  const [id, setId] = useState('');
  const history = useHistory();


  async function handleLogin(event) {
    event.preventDefault();
    const data = {id};
    try {
      const response = await api.post('sessions', data);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (error) {
      alert(`${error}`)
    }
      
  }
  
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça Login</h1>

          <input placeholder="ID" 
            value={id} 
            onChange={e=> setId(e.target.value)} 
          />
          <button className="button" type="submit">Entrar</button>
        </form>
        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default Login;
