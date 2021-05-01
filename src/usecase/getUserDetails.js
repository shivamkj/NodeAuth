export default (getUser) => async (userId) => {
  const user = getUser(userId);
  return user;
};
