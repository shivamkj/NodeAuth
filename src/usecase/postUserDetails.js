export default (updateUser) => async (userId, userDetails) => {
  const updated = updateUser(userId, userDetails);
  return updated;
};
