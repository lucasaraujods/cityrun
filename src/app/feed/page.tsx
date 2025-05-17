'use client';

import React, { useRef, useState } from 'react';
import "./feedPage.css";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [userName, setUserName] = useState('Nome');
  const [userPhoto, setUserPhoto] = useState('/projetos/CityRun/default.png');
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraActive(true);
      }

      // Espera 3 segundos e tira a foto
      setTimeout(() => {
        takePhoto();
      }, 3000);
    } catch (error) {
      console.error('Erro ao acessar a câmera:', error);
      alert('Erro ao acessar a câmera.');
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const photoUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = photoUrl;
      link.download = 'foto-capturada.png';
      link.click();

      closeCamera();
    }
  };

  const closeCamera = () => {
    setCameraActive(false);

    // Para o stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  return (
    <div className="container">
      <header>
        <div className="profile-level">
          <div className="profile-icon">
            <a href="/projetos/CityRun/html/level.html" title="Ir para o perfil">
              <img src={userPhoto} alt="Foto do Perfil" />
            </a>
          </div>
          <span className="level">Level 1</span>
        </div>

        <div className="logo">CITYRUN</div>

        {cameraActive && (
          <div id="cameraView" style={{ display: 'block' }}>
            <video id="cameraStream" ref={videoRef} autoPlay></video>
          </div>
        )}

        <button onClick={openCamera}>Iniciar Câmera e Tirar Foto</button>
      </header>

      <div className="welcome-message">
        <h1>Olá, {userName}!</h1>
        <p>Qual será sua atividade hoje?</p>
      </div>

      <section className="activity-section">
        <h2>🔄 Sua última atividade!</h2>
        <div className="last-activity">
          <img src="placeholder.png" alt="Última atividade" />
        </div>
      </section>

      <section className="feed-section" id="feed-section">
        <h2>📡 Feed</h2>
        <div className="feed-item">
          <img src="placeholder.png" alt="Imagem do Feed" />
        </div>
      </section>

      <footer>
        <div className="nav-icons">
          <a href="/projetos/CityRun/html/estatisticas.html" className="icon">📊</a>
          <a href="/projetos/CityRun/html/chat.html" className="icon">✉️</a>
          <a href="/projetos/CityRun/php/feed.php" className="icon home-icon">🏠</a>
          <a href="/projetos/CityRun/html/notificacao.html" className="icon">🤍</a>
          <a href="/projetos/CityRun/php/perfil.php" className="icon">👤</a>
        </div>
      </footer>
    </div>
  );
}
