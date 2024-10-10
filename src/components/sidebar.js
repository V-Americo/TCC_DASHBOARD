import React from "react";
import '../styles/sidebar.css'
import logo from '../assets/logo-dashboard.png'
import user from '../assets/user.png'

const Sidebar = () =>{
    return(

        <div className="sidebar" >
            <div className="logo">
                <img src={logo} alt="comunicabelem"/>
            </div>

            <div className="menu-items">
                <button className="menu-item">Dashboard</button>
                <button className="menu-item">Serviços</button>
            </div>

            <div className="user-profile">
                <img src={user} className="profile-pic" />

                <div className="user-info">
                    <h3>Victor Américo</h3>
                    <p>CEO - ComunicaBelem</p>
                </div>
            </div>
        </div>


    );
}

export default Sidebar;