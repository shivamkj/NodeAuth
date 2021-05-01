import { Router } from "express";
import {
  sendOtp,
  verifyOtp,
  getUserDetails,
  getUser,
  postUserDetails,
  refreshToken,
} from "../controller/index.js";

import handler from "./expressInterface.js";

const router = Router({ mergeParams: true });

router.post("/otp/send", handler(sendOtp));
router.post("/otp/verify", handler(verifyOtp));

router.get("/user/:id", handler(getUser, true));
router.get("/user/details/:id", handler(getUserDetails, true));
router.post("/user/details/:id", handler(postUserDetails, true));

router.post("/refresh-token", handler(refreshToken));

export default router;
