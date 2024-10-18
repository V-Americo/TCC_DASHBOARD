import React from "react";
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import logo from '../assets/logo-dashboard.png';
import user from '../assets/user.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="comunicabelem" />
      </div>

      <div className="menu-items">
        <Link to="/" className="menu-item">
          Dashboard
        </Link>
        <Link to="/servicos" className="menu-item">
          Serviços
        </Link>
      </div>

      <div className="user-profile">
        <img src={user} className="profile-pic" alt="user profile" />
        <div className="user-info">
          <h3>Victor Américo</h3>
          <p>CEO - ComunicaBelem</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
