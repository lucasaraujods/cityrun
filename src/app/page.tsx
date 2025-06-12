"use client"

import { signIn } from "next-auth/react";
import {  BiDownArrowAlt, BiRun } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

export default  function GoogleLogin() {
    return (
      <section className="w-full min-h-screen bg-zinc-100 text-zinc-900 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col justify-center items-center text-green-600 text-4xl font-[700] tracking-tight transition cursor-pointer hover:text-green-500">
            <BiRun className="text-6xl" />
            Cityrun
          </div>
        </div>

        <div className="p-6 mt-2 bg-white rounded-lg shadow-lg w-full max-w-[400px]">
          <h2 className="text-2xl font-[500]">Seja bem vindo</h2>
          <div className="flex gap-1 items-center text-zinc-500 text-xl">
              <h3 className="text-lg">Faça Login ou crie sua conta</h3>
              <BiDownArrowAlt />
          </div>

            <button type="button" className="bg-zinc-800 rounded-xl mt-4 w-full text-white text-lg flex items-center justify-center gap-2 font-[500] cursor-pointer transition py-3 hover:bg-zinc-700" onClick={() => signIn('google', { callbackUrl: '/perfil' })}>
              <FcGoogle size={26} />
              <span>Utilizar Conta Google</span>
            </button>
        </div>
     </section>
    )
} 