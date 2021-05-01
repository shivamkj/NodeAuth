import sendEmailOtp from "../sendEmailOtp.js";

// process.env.AWS_PROFILE = "ses";


sendEmailOtp("shivamkj360@gmail.com", { name: "John Deo", otp: 124976 });
