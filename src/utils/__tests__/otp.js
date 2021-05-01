import {createOtp, verifyOTP} from "../otp.js";

const MOBILE_NUM = 7898411982;

const [hash, otp] = createOtp(MOBILE_NUM);
// console.log(hash);

// const hash = "28a1628caf9ed575741bb9fc3256119155afaabdafee2640ba120a012f1363e0.1619160803726";
// const otp = 869355

const isVerified = verifyOTP(MOBILE_NUM, hash, otp);
console.log(isVerified);
