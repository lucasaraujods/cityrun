'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCamera, FaChartBar, FaComments, FaHeart, FaUser, FaHome, FaFire } from 'react-icons/fa';
import { BiRun } from 'react-icons/bi';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();
    const router = useRouter();
  
    useEffect(() => {
      if (status === 'unauthenticated') {
        router.push('/google-login');
      }
    }, [status, router]);
  
    if (status === 'loading') {
      return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-100">
          <h2 className="text-xl text-zinc-600 animate-pulse">Carregando...</h2>
        </div>
      );
    }
  
    if (!session) {
      return null;
    }
  

  // const openCamera = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream;
  //       streamRef.current = stream;
  //       setCameraActive(true);
  //     }

  //     setTimeout(() => {
  //       takePhoto();
  //     }, 3000);
  //   } catch (error) {
  //     console.error('Erro ao acessar a câmera:', error);
  //     alert('Erro ao acessar a câmera.');
  //   }
  // };

  // const takePhoto = () => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   const canvas = document.createElement('canvas');
  //   canvas.width = video.videoWidth;
  //   canvas.height = video.videoHeight;

  //   const context = canvas.getContext('2d');
  //   if (context) {
  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //     const photoUrl = canvas.toDataURL('image/png');
  //     const link = document.createElement('a');
  //     link.href = photoUrl;
  //     link.download = 'foto-capturada.png';
  //     link.click();
  //     closeCamera();
  //   }
  // };

  // const closeCamera = () => {
  //   setCameraActive(false);
  //   if (streamRef.current) {
  //     streamRef.current.getTracks().forEach((track) => track.stop());
  //     streamRef.current = null;
  //   }
  // };

  return (
    <div className="min-h-screen w-full bg-zinc-100 text-zinc-900 flex flex-col items-center">
      <header className="w-full max-w-[400px] px-4 py-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/perfil")} className="py-2 transition hover:text-green-600">
            <img
              src={session.user?.image || '/avatar.png'}
              alt="Foto do Perfil"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
          </button>
          <div className="text-lg font-semibold text-green-600 flex gap-1 items-center">
              <FaFire />
              <span>1</span>
          </div>

        </div>

        <div className="text-2xl flex items-center font-bold text-green-600 tracking-tight"><BiRun className='text-4xl' /> Cityrun</div>

        <button
          // onClick={openCamera}
          className="bg-zinc-800 text-white py-2 px-4 rounded-xl flex items-center gap-2 hover:bg-zinc-700 transition"
        >
          <FaCamera />
          +
        </button>
      </header>

      <main className="w-full max-w-[400px] px-4 flex flex-col gap-6">
        <section className="text-center">
          <h2 className="text-2xl font-bold">Olá, {session.user?.name?.split(' ')[0]}!</h2>
          <p className="text-zinc-600">Qual será sua atividade hoje?</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-zinc-800 flex items-center gap-2">
            <FaChartBar className="text-green-600" />
            Sua última atividade!
          </h3>
          <div className="bg-white rounded-lg p-4 shadow-md flex justify-center">
            <img src="placeholder.png" alt="Última atividade" className="w-full max-w-xs" />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-zinc-800 flex items-center gap-2">
            <FaComments className="text-green-600" />
            Feed
          </h3>
          <div className="bg-white rounded-lg p-4 shadow-md flex justify-center">
            <img src="placeholder.png" alt="Imagem do Feed" className="w-full max-w-xs" />
          </div>
        </section>
      </main>

      <footer className="w-full max-w-[400px] fixed bottom-0 bg-white shadow-md py-3 px-4">
        <div className="flex justify-around text-2xl text-zinc-600">
          <button onClick={() => router.push("/estatisticas")} className="py-2 transition hover:text-green-600">
            <FaChartBar />
          </button>
          <button
            onClick={() => router.push("/feed")}
            className="text-green-600 bg-zinc-200 rounded-full p-2"
          >
            <FaHome />
          </button>
          <button onClick={() => router.push("/perfil")} className="py-2 transition hover:text-green-600">
            <FaUser />
          </button>
        </div>
      </footer>
    </div>
  );
}
