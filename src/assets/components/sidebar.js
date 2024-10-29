import React from "react";
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import logo from '../img/logo-dashboard.png';
import user from '../img/user.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="comunicabelem" />
      </div>

      <div className="menu-items">
        <Link to="/dashboard" className="menu-item">
          Dashboard
        </Link>
        <Link to="/servicos" className="menu-item">
          Serviços
        </Link>
      </div>

      <Link to='/user' className="sidebar-user-profile">
        <img src={user} className="sidebar-profile-pic" alt="user profile" />
        <div className="sidebar-user-info">
          <h3>Victor Américo</h3>
          <p>CEO - ComunicaBelem</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
