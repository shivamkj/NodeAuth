import { sendOtp } from "../usecase/index.js";
import { success } from "../utils/responses.js";
import isEmail from "validator/lib/isEmail.js";
import { BadRequestError } from "../utils/errors.js";

export default async (httpRequest) => {
  const { email } = httpRequest.body;

  if (!isEmail(email))
    throw new BadRequestError("Email is missing / incorrect format.");

  const hash = await sendOtp(email);

  return success({
    email,
    hash,
  });
};
