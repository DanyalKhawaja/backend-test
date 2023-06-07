import { scrypt } from "crypto";

export function genHash(password): Promise<string> {
  return new Promise((res, rej) => {
    scrypt(password, "salt", 10, (err, key) => {
      if (!err) res(key.toString("utf8"));
      else rej(err);
    });
  });
}
