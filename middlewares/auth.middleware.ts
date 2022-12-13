import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "../libs/jwt";

export const PageAuthMiddleware = (token: any) => {
  const [success, payload, error] = verify(token);
  return {
    uid: success ? payload.uid as string : undefined,
    error: error,
  }
}