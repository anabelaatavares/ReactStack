import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from "../../services/api";

import './styles.css';
import logoImg from '../../assets/logo.svg'

function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongID = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();
  
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongID,
      }
    }).then(response =>{
      console.log(response);
      
      setIncidents(response.data);
    })
  }, [ongID]);

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongID,
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert(`${error}`)
    }
  }

  function handleLogOut() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Bem Vinda, {ongName}</span>

        <Link className="back-link" to="/incidents/new">
            Registar novo caso
        </Link>
        <button onClick={handleLogOut} type="button">
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>

      <h1>Casos registados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO</strong>
              <p>{incident.titulo}</p>
          
            <strong>DESCRICAO</strong>
              <p>{incident.description}</p>
            <strong>valor</strong>
              <p> {Intl.NumberFormat('pt-PT', {style: 'currency', currency: 'EUR'}).format(incident.value)}</p>

            <button onClick={() => handleDelete(incident.id)} type="button">
                <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
            </button>
        </li>

        ))}
        {/* <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>caso teste</p>
          <strong>Descricao</strong>
          <p>descricao teste</p>
          <strong>valor</strong>
          <p>120</p>

          <button type="button">
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
          </button>
        </li> */}
      </ul>
    </div>
  );
}

export default Profile;
