

import React from 'react';
import Header from './comp/Header';
import Sidebar from './comp/Sidebar';
import VideoGrid from './comp/VideoGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
       <Sidebar />
        <VideoGrid />
        </div>
    </div>
  );
}

export default App;
