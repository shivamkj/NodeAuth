import _getUser from "./getUser.js";
import _getUserDetails from "../usecase/getUserDetails.js";
import _postUserDetails from "../usecase/postUserDetails.js";
import _sendOtp from "./sendOtp.js";
import _verifyOtp from "./verifyOtp.js";
import _resendOtp from "./resendOtp.js";
import _refreshToken from "../usecase/refreshToken.js";

import sendEmail from "../utils/sendEmail.js";
import { genrateHash } from "../utils/functions.js";
import { signToken, verifyToken } from "../utils/jwt.js";
import {
  addUser,
  getUsers,
  updateUser,
} from "../repository/MemoryRepository.js";

const sendOtp = _sendOtp(sendEmail, genrateHash);
const verifyOtp = _verifyOtp(signToken, genrateHash);
const resendOtp = _resendOtp();

const getUser = _getUser(getUsers);
const getUserDetails = _getUserDetails(getUsers);
const postUserDetails = _postUserDetails(updateUser);

const refreshToken = _refreshToken(verifyToken, signToken);

export {
  getUser,
  getUserDetails,
  postUserDetails,
  sendOtp,
  verifyOtp,
  resendOtp,
  refreshToken,
};
