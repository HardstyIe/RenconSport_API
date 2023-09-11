import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    first_name: faker.lorem.words(5),
    last_name: faker.lorem.words(5),
    password: faker.lorem.words(5),
    birthday: faker.datatype.datetime(),
    location: undefined,
    phoneNumber: undefined,
    googleId: undefined,
    facebookId: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    first_name: faker.lorem.words(5),
    last_name: faker.lorem.words(5),
    password: faker.lorem.words(5),
    is_admin: false,
    birthday: faker.datatype.datetime(),
    location: undefined,
    phoneNumber: undefined,
    googleId: undefined,
    facebookId: undefined,
  };
}
export function fakeExercice() {
  return {
    name: faker.name.fullName(),
    difficulty: faker.lorem.words(5),
  };
}
export function fakeExerciceComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    difficulty: faker.lorem.words(5),
    is_liked: false,
  };
}
export function fakeChatMessage() {
  return {
    content: faker.lorem.words(5),
    sent_at: faker.datatype.datetime(),
  };
}
export function fakeChatMessageComplete() {
  return {
    id: faker.datatype.number(),
    chat_group_id: faker.datatype.number(),
    sender_id: faker.datatype.uuid(),
    content: faker.lorem.words(5),
    sent_at: faker.datatype.datetime(),
  };
}
export function fakeTraining() {
  return {
    start_at: faker.datatype.datetime(),
    finish_at: faker.datatype.datetime(),
    location: faker.lorem.words(5),
    status: faker.lorem.words(5),
    dynamic_latitude: faker.datatype.float(),
    dynamic_longitude: faker.datatype.float(),
  };
}
export function fakeTrainingComplete() {
  return {
    id: faker.datatype.number(),
    user_id: faker.datatype.uuid(),
    start_at: faker.datatype.datetime(),
    finish_at: faker.datatype.datetime(),
    location: faker.lorem.words(5),
    status: faker.lorem.words(5),
    dynamic_latitude: faker.datatype.float(),
    dynamic_longitude: faker.datatype.float(),
  };
}
export function fakeExerciceTraining() {
  return {
    sets: faker.datatype.number(),
    repetitions: faker.datatype.number(),
    weight: faker.datatype.float(),
  };
}
export function fakeExerciceTrainingComplete() {
  return {
    id: faker.datatype.number(),
    training_id: faker.datatype.number(),
    exercice_id: faker.datatype.number(),
    sets: faker.datatype.number(),
    repetitions: faker.datatype.number(),
    weight: faker.datatype.float(),
  };
}
export function fakeTrainingPartner() {
  return {
    status: faker.lorem.words(5),
  };
}
export function fakeTrainingPartnerComplete() {
  return {
    id: faker.datatype.number(),
    training_id: faker.datatype.number(),
    user_id: faker.datatype.uuid(),
    status: faker.lorem.words(5),
  };
}
export function fakeExerciceLikeComplete() {
  return {
    id: faker.datatype.number(),
    user_id: faker.datatype.uuid(),
    exercice_id: faker.datatype.number(),
  };
}
export function fakeUserLikeComplete() {
  return {
    id: faker.datatype.number(),
    liker_id: faker.datatype.uuid(),
    liked_id: faker.datatype.uuid(),
  };
}
export function fakeChatGroup() {
  return {
    name: undefined,
    type: faker.lorem.words(5),
  };
}
export function fakeChatGroupComplete() {
  return {
    id: faker.datatype.number(),
    training_id: undefined,
    name: undefined,
    type: faker.lorem.words(5),
  };
}
export function fakeUserChatGroupComplete() {
  return {
    id: faker.datatype.number(),
    user_id: faker.datatype.uuid(),
    chat_group_id: faker.datatype.number(),
  };
}
export function fakeLocation() {
  return {
    name: faker.name.fullName(),
    address: faker.lorem.words(5),
    type: faker.lorem.words(5),
    latitude: faker.datatype.float(),
    longitude: faker.datatype.float(),
  };
}
export function fakeLocationComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    address: faker.lorem.words(5),
    type: faker.lorem.words(5),
    latitude: faker.datatype.float(),
    longitude: faker.datatype.float(),
  };
}
