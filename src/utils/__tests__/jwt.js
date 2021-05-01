import { signToken, verifyToken } from "../jwt.js";

const testAccessToken = async () => {
  const secret =
    "48f234b26ecdd84220f1a8a85d13496874041d6b1eab09c4506ae152c2bebd0a";
  const accessToken = await signToken(
    { audience: "abc@xyz.com", expiresIn: "1h" },
    secret
  );
  console.log(accessToken);
  const payload = await verifyToken(accessToken, secret);
  console.log(payload);
};

const testRefreshToken = async () => {
  process.env.REFRESH_TOKEN_SECRET =
    "fabff2fa3833326be2e4170e1ad3e5c1d4639752197bc5175dfb75c51f737dbb";
  const refreshToken = await signRefreshToken("3587");
  console.log(refreshToken);
  const userId = await verifyRefreshToken(refreshToken);
  console.log(userId);
};

// testAccessToken();
// testRefreshToken();
