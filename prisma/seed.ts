import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  // Générer des utilisateurs
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        password: faker.internet.password(),
        is_admin: faker.datatype.boolean(),
        birthday: faker.date.past(),
        location: faker.address.city(),
        phoneNumber: faker.phone.number(),
      },
    });
  }

  // Générer des exercices
  for (let i = 0; i < 10; i++) {
    await prisma.exercice.create({
      data: {
        name: faker.lorem.word(),
        difficulty: faker.random.arrayElement(['Facile', 'Moyen', 'Difficile']),
        is_liked: faker.datatype.boolean(),
      },
    });
  }

  // Générer des messages de chat
  for (let i = 0; i < 10; i++) {
    await prisma.chatMessage.create({
      data: {
        chat_group_id: faker.datatype.number({ min: 1, max: 10 }),
        sender_id: faker.datatype.uuid(),
        content: faker.lorem.sentences(),
        sent_at: faker.date.recent(),
      },
    });
  }

  // Générer des formations (Trainings)
  for (let i = 0; i < 10; i++) {
    await prisma.training.create({
      data: {
        user_id: faker.datatype.uuid(),
        start_at: faker.date.future(),
        finish_at: faker.date.future(),
        location: faker.address.city(),
        status: faker.random.arrayElement(['Planifié', 'Terminé']),
        dynamic_latitude: parseFloat(faker.address.latitude()),
        dynamic_longitude: parseFloat(faker.address.longitude()),
      },
    });
  }

  // Générer des groupes de chat (ChatGroups)
  for (let i = 0; i < 10; i++) {
    await prisma.chatGroup.create({
      data: {
        training_id: faker.datatype.number({ min: 1, max: 10 }),
        name: faker.random.words(),
        type: faker.random.arrayElement(['Public', 'Privé']),
      },
    });
  }

  // Générer des exercices dans des formations (TrainingExercices)
  for (let i = 0; i < 10; i++) {
    await prisma.exerciceTraining.create({
      data: {
        training_id: faker.datatype.number({ min: 1, max: 10 }),
        exercice_id: faker.datatype.number({ min: 1, max: 10 }),
        sets: faker.datatype.number({ min: 1, max: 10 }),
        repetitions: faker.datatype.number({ min: 1, max: 10 }),
        weight: faker.datatype.float({ min: 1, max: 10 }),
      },
    });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
