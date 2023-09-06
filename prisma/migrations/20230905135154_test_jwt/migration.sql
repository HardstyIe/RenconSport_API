-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "birthday" DATE NOT NULL,
    "location" VARCHAR(250),
    "phone" VARCHAR(50),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercice" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "difficulty" VARCHAR(30) NOT NULL,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Exercice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" SERIAL NOT NULL,
    "chat_group_id" INTEGER NOT NULL,
    "sender_id" UUID NOT NULL,
    "content" VARCHAR(2000) NOT NULL,
    "sent_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "start_at" DATE NOT NULL,
    "finish_at" DATE NOT NULL,
    "location" VARCHAR(250) NOT NULL,
    "status" VARCHAR(250) NOT NULL,
    "dynamic_latitude" DOUBLE PRECISION NOT NULL,
    "dynamic_longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciceTraining" (
    "id" SERIAL NOT NULL,
    "training_id" INTEGER NOT NULL,
    "exercice_id" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ExerciceTraining_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingPartner" (
    "id" SERIAL NOT NULL,
    "training_id" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,
    "status" VARCHAR(200) NOT NULL,

    CONSTRAINT "TrainingPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciceLike" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "exercice_id" INTEGER NOT NULL,

    CONSTRAINT "ExerciceLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLike" (
    "id" SERIAL NOT NULL,
    "liker_id" UUID NOT NULL,
    "liked_id" UUID NOT NULL,

    CONSTRAINT "UserLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatGroup" (
    "id" SERIAL NOT NULL,
    "training_id" INTEGER NOT NULL,
    "name" VARCHAR(200),

    CONSTRAINT "ChatGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChatGroup" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "chat_group_id" INTEGER NOT NULL,

    CONSTRAINT "UserChatGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(400) NOT NULL,
    "address" VARCHAR(400) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciceLike_user_id_exercice_id_key" ON "ExerciceLike"("user_id", "exercice_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserLike_liker_id_liked_id_key" ON "UserLike"("liker_id", "liked_id");

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chat_group_id_fkey" FOREIGN KEY ("chat_group_id") REFERENCES "ChatGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceTraining" ADD CONSTRAINT "ExerciceTraining_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceTraining" ADD CONSTRAINT "ExerciceTraining_exercice_id_fkey" FOREIGN KEY ("exercice_id") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPartner" ADD CONSTRAINT "TrainingPartner_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPartner" ADD CONSTRAINT "TrainingPartner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceLike" ADD CONSTRAINT "ExerciceLike_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceLike" ADD CONSTRAINT "ExerciceLike_exercice_id_fkey" FOREIGN KEY ("exercice_id") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLike" ADD CONSTRAINT "UserLike_liker_id_fkey" FOREIGN KEY ("liker_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLike" ADD CONSTRAINT "UserLike_liked_id_fkey" FOREIGN KEY ("liked_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatGroup" ADD CONSTRAINT "ChatGroup_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChatGroup" ADD CONSTRAINT "UserChatGroup_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChatGroup" ADD CONSTRAINT "UserChatGroup_chat_group_id_fkey" FOREIGN KEY ("chat_group_id") REFERENCES "ChatGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;