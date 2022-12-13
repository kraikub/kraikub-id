import { UserModel } from "./../../data/models/user";
import { createResponse } from "./../../utils/response";
import { PageAuthMiddleware } from "./../../middlewares/auth.middleware";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
  const { uid, error } = PageAuthMiddleware(req.cookies.access);
  if (error || !uid) {
    return res.status(401).send(createResponse(false, error.toString(), null));
  }
  if (req.method === "PUT") {
    if (!req.body.key) {
      return res.status(422).send(createResponse(false, "", null));
    }

    const { key, value } = req.body;
    const updateDocument: {[key: string]: any} = {}
    updateDocument[key] = value;

    const a = await UserModel.findOneAndUpdate<User>({ uid }, updateDocument);
    
    return res.status(200).send(createResponse(true, "Update complete", {}));
  }
} catch (error) {
  console.error(error)
  return res.status(500).send(createResponse(false, (error as any).toString(), null));
}
};
export default handler;
