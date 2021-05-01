import { getUserDetails } from "../usecase/index.js";
import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default async (httpRequest) => {
  const userId = httpRequest.params.id;

  const user = await getUserDetails(userId);

  // Check for empty user
  if (user == undefined) throw new BadRequestError("User not found");

  return success({ user });
};
