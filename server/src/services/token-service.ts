import jwt from "jsonwebtoken";

interface Payload {
  name: string;
  email: string;
}

class TokenService {
  async generateTokens(payload: Payload) {
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    return accessToken;
  }

  async verifyToken(token: string) {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);

    return user;
  }
}

export default new TokenService();
