import React from 'react';
import './videoGrid.css';

function VideoGrid() {
  const videos = [
    {
      id: 1,
      title: 'Java Full Course for free ☕',
      thumbnail: 'image/Screenshot 2024-09-03 002030.png', 
      views: '1L views 9 month ago',
      time: '12:00:00',
    },
    {
      id: 2,
      title: 'Venkat Prabhu Interview With Baradwaj Rangan',
      thumbnail: 'image/Screenshot 2024-09-02 235713.png',
      views: '4.1K views · 52 minutes ago',
      time: '30:59',
    },
    {
      id: 3,
      title: 'Telegram Owner ARRESTED 🚨 - Telegram Banned? 🤯',
      thumbnail: 'image/Screenshot 2024-09-03 003711.png',
      views: '1L views · 2 day ago',
      time: '17:11',
    },
    {
      id: 4,
      title: 'Meiyazhagan - Jukebox | Karthi | Arvind Swamy | Govind Vasantha | C.Premkumar | Suriya | Jyotika',
      thumbnail: 'image/Screenshot 2024-09-03 000134.png',
      views: '10K views ·  1 day ago',
      time: '26:05',
    },
    {
      id: 5,
      title: 'Boss-uh... Choose the Best Answer! 😎',
      thumbnail: 'image/Screenshot 2024-09-03 002247.png',
      views: '10K views · 52 minutes ago',
      time: '12:12',
    },
    {
      id: 6,
      title: 'Build & Deploy a TODO APP with JavaScript',
      thumbnail: 'image/Screenshot 2024-09-03 003340.png',
      views: '100K views · 5 month ago',
      time: '38:48',
    },
   
  ];

  return (
    <div className="video-grid">
      {videos.map(video => (
        <div className="video-item" key={video.id}>
          <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.views}</p>
            <span>{video.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
