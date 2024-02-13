import crypto from "crypto";

export function getRandId(bytes = 20, type: any = "hex") {
    return crypto.randomBytes(bytes).toString(type);
}
  