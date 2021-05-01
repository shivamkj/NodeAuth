export default (sendEmail, genrateHash) => async (email) => {
  const OTP_LENGTH = 6;
  const TTL = 300000; // Time to Live (5 minutes: 5 * 60 * 1000)

  const otpArray = [];

  for (let num = 0; num < OTP_LENGTH; num++)
    otpArray.push(Math.floor(Math.random() * 10));

  const otp = otpArray.join("");
  const expires = Date.now() + TTL;

  const otpData = `${email}.${otp}.${expires}`;
  const hash = genrateHash(otpData);

  const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user

  await sendEmail(email, { name: "Shivam", otp });

  return fullHash;
};
