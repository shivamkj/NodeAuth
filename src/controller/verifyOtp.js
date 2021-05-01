import { verifyOtp } from "../usecase/index.js";
import { success } from "../utils/responses.js";
// import isEmail from "validator/es/lib/isEmail.js";
import isEmail from "validator/lib/isEmail.js";
import { BadRequestError } from "../utils/errors.js";

export default async (httpRequest) => {
  const { email, otp, hash } = httpRequest.body;

  if (!isEmail(email))
    throw new BadRequestError("Email is missing / incorrect format.");

  if (otp.toString().length != 6 || typeof otp != "number")
    throw new BadRequestError("OTP is missing / incorrect format.");

  if (hash.length < 30 || typeof hash != "string")
    throw new BadRequestError("Hash is missing / incorrect");

  const [accessToken, refreshToken] = await verifyOtp(email, otp, hash);
  return success({
    accessToken,
    refreshToken,
  });
};
