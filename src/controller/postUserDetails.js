import { postUserDetails } from "../usecase/index.js";
import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default async (httpRequest) => {
  const userId = httpRequest.params.id;
  const userData = httpRequest.body;

  if (userData == undefined || Object.keys(userData).length == 0)
    throw new BadRequestError("Incorrect Data");

  const isPosted = await postUserDetails(userId, userData);

  // Check for empty user
  if (isPosted == false) throw new BadRequestError("Cannot Post");

  return success({ message: "Posted Successfully" });
};
