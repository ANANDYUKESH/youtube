import React from 'react';
import { FaYoutube, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { AiTwotoneAudio } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import './header.css';

function Header() {
  return (
    <header >
      <div className="header">
      <div className="header-left">
      <IoIosMenu size={32} className='menu'/>
        <FaYoutube className="logo" size={32} />
        <h1 className='"logo'>YouTube</h1>
      </div>
      <div className="header-center">
        <div className='search'>
        <input type="text" placeholder="Search" className="search-bar" />
        <IoSearch className="search-icon" color='#303030' />
        </div>
     
      <div className='audio'><AiTwotoneAudio color='white'/></div>
      </div>
     
      <div className="header-right">
      <MdOutlineVideoCall className="icon" size={20}/>
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
      </div>
      <div className='topics'>
      <div className='topic' style={{color:'#303030',background:"white",width:'30px',borderRadius:'5px',textAlign:'center'}}>All</div>
        <div className='topic'>Trending</div>
        <div className='topic'>Subscription</div>
        <div className='topic'>Music</div>
        <div className='topic'>Gaming</div>
        <div className='topic'>News</div>
        <div className='topic'>Sports</div>
        <div className='topic'>More</div>
      </div>
      
    </header>
  );
}

export default Header;
