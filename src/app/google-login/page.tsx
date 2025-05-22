"use client"
import { signIn } from "next-auth/react";

export default  function GoogleLogin() {
    return (
        <button className="bg-green text-xl font-[500] py-2 bg-green-500 rounded-lg px-8" onClick={() => signIn('google', { callbackUrl: '/user-info' })}>
            Login
        </button>
    )
} 