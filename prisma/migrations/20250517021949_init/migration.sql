-- CreateTable
CREATE TABLE "cadastro" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,
    "fotoperfil" BYTEA,
    "nome" VARCHAR(20),
    "bio" VARCHAR(150),
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "exp" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "cadastro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "desafios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "desc" VARCHAR(50) NOT NULL,
    "exp" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "desafios_pkey" PRIMARY KEY ("id")
);
