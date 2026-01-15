-- CreateTable
CREATE TABLE "Tema" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "enlace" TEXT NOT NULL,
    "votos" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Tema_pkey" PRIMARY KEY ("id")
);
