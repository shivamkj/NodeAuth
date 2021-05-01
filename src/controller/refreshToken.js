import { refreshToken } from "../usecase/index.js";
import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default async (httpRequest) => {
  const { refreshToken: token } = httpRequest.body;

  if (!token) throw new BadRequestError("Refresh Token Missing");

  const accessToken = await refreshToken(token);

  return success({ accessToken });
};
