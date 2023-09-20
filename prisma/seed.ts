import { Temporal } from '@js-temporal/polyfill';
import { Prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const main = async () => {
  // const users = Array(20).fill(null).map(()=>{
  //   return prismaClient.user.create({
  //     data : {
  //       email: faker.internet.exampleEmail(),
  //     }
  //   })
  // })

  const users = await Promise.all(
    (
      [
        {
          email: 'test@test.com',
          password: 'password',
          biography: 'ceci est un test',
          birthday: new Date('1970-05-01'),
          firstName: 'test',
          lastName: 'test2',
          isAdmin: false,
          phoneNumber: '0710245106',
          avatar: 'ddkaodzjao.png', 
        },
        {
          email: 'test2@test.com',
          password: 'password',
          biography: 'ceci est un test',
          birthday: new Date('1970-05-01'),
          firstName: 'tes3',
          lastName: 'test2',
          isAdmin: false,
          phoneNumber: '0310245106',
          avatar: 'dofafa.png',
        },
        {
          email: 'test3@test.com',
          password: 'password',
          biography: 'ceci est un test',
          birthday: new Date('1970-05-01'),
          firstName: 'test2',
          lastName: 'test2',
          isAdmin: true,
          phoneNumber: '0210245106',
          avatar: 'dofadazdadzfa.png',
        },
      ] as Prisma.UserCreateInput[]
    ).map((user) =>
      prismaClient.user.create({
        data: user,
      }),
    ),
  );

  await prismaClient.user.update({
    where: {
      id: users[0].id,
    },
    data: {
      likedUsers: {
        connect: {
          id: users[1].id,
        },
      },
    },
  });

  const trainings = await Promise.all(
    (
      [
        {
          startedAt: new Date(),
          finishedAt: new Date(),
          mode: '1v1',
          user: {
            connect: {
              id: users[0].id,
            },
          },
          partners: {
            connect: [{ id: users[1].id }, { id: users[2].id }],
          },
        },
      ] as Prisma.TrainingCreateInput[]
    ).map((training) =>
      prismaClient.training.create({
        data: training,
      }),
    ),
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sports = await Promise.all(
    (
      [
        {
          name: 'Musculation',
          icon: 'eookfezo.png',
        },
      ] as Prisma.SportCreateInput[]
    ).map((sport) =>
      prismaClient.sport.create({
        data: sport,
      }),
    ),
  );

  const exercices = await Promise.all(
    (
      [
        {
          name: 'course',
          difficulty: 'EASY',
        },
      ] as Prisma.ExerciceCreateInput[]
    ).map((exercice) =>
      prismaClient.exercice.create({
        data: exercice,
      }),
    ),
  );

  await prismaClient.user.update({
    where: {
      id: users[1].id,
    },
    data: {
      likedExercices: {
        connect: {
          id: exercices[0].id,
        },
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rounds = await Promise.all(
    (
      [
        {
          exercice: {
            connect: {
              id: exercices[0].id,
            },
          },
          training: {
            connect: {
              id: trainings[0].id,
            },
          },
          sets: 3,
          duration: Temporal.Duration.from('PT1H').total({
            unit: 'milliseconds',
          }),
        },
      ] as Prisma.RoundCreateInput[]
    ).map((round) =>
      prismaClient.round.create({
        data: round,
      }),
    ),
  );

  const groups = await Promise.all(
    (
      [
        {
          training: {
            connect: {
              id: trainings[0].id,
            },
          },
          type: 'PUBLIC',
        },
      ] as Prisma.GroupCreateInput[]
    ).map((group) =>
      prismaClient.group.create({
        data: group,
      }),
    ),
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const messages = await Promise.all(
    (
      [
        {
          content: 'blabla test message',
          sender: {
            connect: {
              id: users[0].id,
            },
          },
          group: {
            connect: {
              id: groups[0].id,
            },
          },
        },
      ] as Prisma.MessageCreateInput[]
    ).map((message) =>
      prismaClient.message.create({
        data: message,
      }),
    ),
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const locations = await Promise.all(
    (
      [
        {
          training: {
            connect: {
              id: trainings[0].id,
            },
          },
          type: 'OUTDOOR',
          latitude: -62.07766,
          longitude: -136.58868,
        },
      ] as Prisma.LocationCreateInput[]
    ).map((location) =>
      prismaClient.location.create({
        data: location,
      }),
    ),
  );
};

main();
