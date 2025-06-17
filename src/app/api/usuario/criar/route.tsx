import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// import * as jwt from "jsonwebtoken";

const prisma = new PrismaClient()

// BACK-END -> PRISMA -> SUPABASE (PostgresSQL na nuvem)

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const userCreated = await prisma.usuario.create({
//       data: body,
//     });

//     return NextResponse.json({ message: 'Usuário criado com sucesso!' }, { status: 201 });
//   } catch (error) {
//     console.error('Erro ao criar:', error);
//     return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
//   }
// }

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const userCreated = await prisma.usuario.create({
      data: body,
    });

    return NextResponse.json({ message: 'Usuário criado com sucesso!' }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
  }
}