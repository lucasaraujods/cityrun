import { PrismaClient, Usuario } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.senha) {
      throw new
    }

    const userFound: Usuario = await prisma.usuario.findUnique({
      where: {
        email: body.email,
        senha: body.senha
      }
    })

    return NextResponse.json({ message: 'Usuário encontrado!', id: userFound.id }, { status: 200 });
  } catch (error) {
    console.error('Erro ao criar:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
  }
}