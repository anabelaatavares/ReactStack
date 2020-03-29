import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg'

function Incident() {
  const ongID = localStorage.getItem('ongId');
  const [titulo, setTitulo] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = {titulo, description, value};
    try {
      await api.post('incidents', data, { 
        headers: {
          Authorization: ongID,
      }});
      history.push('/profile');
    } catch (error) {
      alert(`${error}`)
    }    
  }

  return (
    <div className="new-incident">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Registo novo caso</h1>
          <p>aqui</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para a home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Titulo do caso" name="" id=""
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />

          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Registar</button>
        </form>
      </div>
  </div>
  );
}

export default Incident;
