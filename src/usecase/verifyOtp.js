import { ForbiddenError } from "../utils/errors.js";

export default (signToken, genrateHash) => async (email, otp, fullHash) => {
  const [hashValue, expires] = fullHash.split(".");

  const now = Date.now();
  if (now > parseInt(expires)) throw new ForbiddenError("OTP Timed Out.");

  const data = `${email}.${otp}.${expires}`;
  const newCalculatedHash = genrateHash(data);
  if (newCalculatedHash !== hashValue)
  throw new ForbiddenError("Incorrect OTP");
  
  console.log(newCalculatedHash, hashValue)

  const accessSecret = process.env.ACCESS_TOKEN_SECRET;
  const accessOptions = { audience: email, expiresIn: "1h" };
  const accessToken = await signToken(accessOptions, accessSecret);

  const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
  const refreshOptions = { audience: email, expiresIn: "1y" };
  const refreshToken = await signToken(refreshOptions, refreshSecret);

  // @TODO : Persist refresh token

  return [accessToken, refreshToken];
};
