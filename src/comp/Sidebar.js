import React from 'react';
import { FaHome, FaFire, FaPlay, FaHistory, FaUser } from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-item">
        <FaHome  className='icon'/>
        <p >Home</p>
      </div>
    
      <div className="sidebar-item">
        <SiYoutubeshorts className='icon'/>
        <p class="trend">Trending</p>
      </div>
 
      <div className="sidebar-item">
        <MdOutlineSubscriptions  className='icon' />
        <p>Subscriptions</p>
      </div>
      

      <div className="sidebar-item">
        <FaUser  className='icon'/>
        <p>You</p>
      </div>
     
    </aside>
  );
}

export default Sidebar;
