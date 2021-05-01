const users = [
  {
    id: 1,
    name: "Test User 1",
    email: "test1@mail.com",
  },
  {
    id: 2,
    name: "Test User 2",
    email: "test2@mail.com",
  },
  {
    id: 3,
    name: "Test User 3",
    email: "test3@mail.com",
  },
];

const getUsers = async (id) => {
  const user = users.find((v) => v.id == id);
  return user;
};

const addUser = async (user) => {
  users.push(user);
  return true;
};

const updateUser = async (id, details) => {
  let userIndex = users.findIndex((v) => v.id == id);
  if (userIndex == -1) return false;
  const user = users[userIndex];
  users[userIndex] = { ...user, ...details };
  return true;
};

export { getUsers, addUser, updateUser };
