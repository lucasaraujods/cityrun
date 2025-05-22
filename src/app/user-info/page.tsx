'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/google-login');
        }
    }, [status, router]);

    if (status === "loading") {
        return <div>Carregando...</div>;
    }

    if (!session) {
        return null;
    }

    return (
        <div className="border bg-blue-400 h-[200px] w-[200px]">
            <h1>Olá {session.user?.name}</h1>
            <h2>Email: {session.user?.email}</h2>
            <div>Image url: {session.user?.image}</div>

            <button className="bg-green-500 py-1 px-8 font-[500] text-xl rounded-lg" onClick={() => mandaProBanco()}>Manda pro banco</button>
        </div>
    );
}