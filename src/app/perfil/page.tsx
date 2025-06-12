'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BsBoxArrowLeft } from 'react-icons/bs';

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

  return (
    <section className="w-full min-h-screen bg-zinc-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-[450px] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <img
            src={session.user?.image || '/avatar.png'}
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-md object-cover"
          />
          <h1 className="text-2xl font-semibold text-zinc-800">
            Olá, {session.user?.name} 👋
          </h1>
          <p className="text-zinc-500">{session.user?.email}</p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <button
            className="bg-red-500 hover:bg-red-400 text-white py-3 rounded-xl text-lg font-medium transition flex gap-2 justify-center items-center cursor-pointer"
            onClick={() => router.push('/google-login')}
          >
            <BsBoxArrowLeft size={26} className="mb-[2px]" /> 
            <span className="text-xl mr-2">Sair</span>
          </button>
        </div>
      </div>
    </section>
  );
}
