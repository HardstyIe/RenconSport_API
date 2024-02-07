import { Temporal } from '@js-temporal/polyfill';
import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

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
          password: await bcrypt.hash('password', 10),
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
          password: await bcrypt.hash('password', 10),
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
          password: await bcrypt.hash('password', 10),
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sports = await Promise.all(
    (
      [
        { name: 'Musculation', icon: 'eookfezo.png' },
        { name: 'Course', icon: 'eookfezo.png' },
        { name: 'Boxing', icon: 'eookfezo.png' },
        { name: 'Football', icon: 'eookfezo.png' },
        { name: 'Basketball', icon: 'eookfezo.png' },
        { name: 'Tennis', icon: 'eookfezo.png' },
        { name: 'Natation', icon: 'eookfezo.png' },
        { name: 'Handball', icon: 'eookfezo.png' },
        { name: 'Volleyball', icon: 'eookfezo.png' },
        { name: 'Rugby', icon: 'eookfezo.png' },
        { name: 'Golf', icon: 'eookfezo.png' },
        { name: 'Athlétisme', icon: 'eookfezo.png' },
      ] as Prisma.SportCreateInput[]
    ).map((sport) =>
      prismaClient.sport.create({
        data: sport,
      }),
    ),
  );

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
          sport: {
            connect: {
              id: sports[0].id,
            },
          },
        },
      ] as Prisma.TrainingCreateInput[]
    ).map((training) =>
      prismaClient.training.create({
        data: training,
      }),
    ),
  );

  const exercices = await Promise.all(
    (
      [
        {
          name: 'Benchpress',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[0].id } },
        },
        {
          name: 'Squat',
          difficulty: 'HARD',
          sport: { connect: { id: sports[0].id } },
        },
        {
          name: 'Jogging',
          difficulty: 'EASY',
          sport: { connect: { id: sports[1].id } },
        },
        {
          name: 'Sprint',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[1].id } },
        },
        {
          name: 'Punch',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[2].id } },
        },
        {
          name: 'Kick',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[2].id } },
        },
        {
          name: 'Dribbling',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[3].id } },
        },
        {
          name: 'Passing',
          difficulty: 'EASY',
          sport: { connect: { id: sports[3].id } },
        },
        {
          name: 'Free Throw',
          difficulty: 'EASY',
          sport: { connect: { id: sports[4].id } },
        },
        {
          name: 'Three Pointer',
          difficulty: 'HARD',
          sport: { connect: { id: sports[4].id } },
        },
        {
          name: 'Serve',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[5].id } },
        },
        {
          name: 'Volley',
          difficulty: 'HARD',
          sport: { connect: { id: sports[5].id } },
        },
        {
          name: 'Freestyle',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[6].id } },
        },
        {
          name: 'Backstroke',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[6].id } },
        },
        {
          name: 'Throw',
          difficulty: 'EASY',
          sport: { connect: { id: sports[7].id } },
        },
        {
          name: 'Catch',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[7].id } },
        },
        {
          name: 'Spike',
          difficulty: 'HARD',
          sport: { connect: { id: sports[8].id } },
        },
        {
          name: 'Block',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[8].id } },
        },
        {
          name: 'Tackle',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[9].id } },
        },
        {
          name: 'Scrum',
          difficulty: 'HARD',
          sport: { connect: { id: sports[9].id } },
        },
        {
          name: 'Swing',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[10].id } },
        },
        {
          name: 'Putt',
          difficulty: 'EASY',
          sport: { connect: { id: sports[10].id } },
        },
        {
          name: 'Long Jump',
          difficulty: 'MEDIUM',
          sport: { connect: { id: sports[11].id } },
        },
        {
          name: 'High Jump',
          difficulty: 'HARD',
          sport: { connect: { id: sports[11].id } },
        },
      ] as Prisma.ExerciceCreateInput[]
    ).map((exercice) => prismaClient.exercice.create({ data: exercice })),
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
          owner: {
            connect: {
              id: users[0].id,
            },
          },
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
