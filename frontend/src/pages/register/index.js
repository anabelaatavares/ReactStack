import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from "../../services/api";


import './styles.css';
import logoImg from '../../assets/logo.svg'

function Register() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setwhatsApp] = useState('');
  const [city, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {name, email, whatsapp, city, uf};
    try {
      const response = await api.post('ongs', data);
      alert(`${response.data}`)
      history.push('/');
    } catch (error) {
      alert(`${error}`)
    }
      
  }

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
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
          <input type="email" placeholder="Email"  
            value={email} 
            onChange={e => setEmail(e.target.value)}/>
          <input placeholder="WhatsApp" 
            value={whatsapp} 
            onChange={e => setwhatsApp(e.target.value)}/>

          <div className="input-group">
            <input placeholder="cidade"
             value={city} 
             onChange={e => setCidade(e.target.value)}
             />
            <input placeholder="UF" style={{ width: 80 }} 
             value={uf} 
             onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Registar</button>
        </form>
      </div>
  </div>
  );
}

export default Register;
