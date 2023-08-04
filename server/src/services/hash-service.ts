import crypto from "crypto";

class HashService {
  async generateHash(data: string) {
    return crypto
      .createHmac("sha256", process.env.HASH_SECRET as string)
      .update(data)
      .digest("hex");
  }
}

export default new HashService();
