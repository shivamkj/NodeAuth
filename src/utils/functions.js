import crypto from "crypto";

const genrateHash = (data) => {
  const OTP_SECRET = process.env.OTP_SECRET;
  return crypto.createHmac("sha256", OTP_SECRET).update(data).digest("hex"); // creating SHA256 hash of the data
};

export { genrateHash };
