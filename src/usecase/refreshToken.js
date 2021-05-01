export default (verifyToken, signToken) => async (refreshToken) => {
  const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
  const payload = await verifyToken(refreshToken, refreshSecret);

  const accessSecret = process.env.ACCESS_TOKEN_SECRET;
  const accessOptions = { audience: payload.aud, expiresIn: "1h" };
  const accessToken = await signToken(accessOptions, accessSecret);

  return accessToken;
};
