import jwt from "jsonwebtoken";

export const verify = (token: string): [boolean, any, any | null] => {
  try {
    const p = jwt.verify(token, process.env.JWT_SECRET as string);
    return [true, p, null];
  } catch (error) {
    return [false, null, error];
  }
};


