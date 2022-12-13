import { UserModel } from "./../../data/models/user";
import { createResponse, response } from "./../../utils/response";
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

    const u = await UserModel.findOne<User>({ uid })
    if (!u) {
      return response(res, 422, false, "Unprocess Uid", undefined)
    }

    if (!u.personalEmail) {
      return response(res, 405, false, "Not allowed, require verified email", undefined)
    }


    const { value } = req.body;
    const updateDocument: {[key: string]: any} = {
      "settings.twa.enable": value
    }

    const a = await UserModel.findOneAndUpdate<User>({ uid }, updateDocument);
    
    return res.status(200).send(createResponse(true, "Update complete", {  "settings.twa.enable": value }));
  }
} catch (error) {
  console.error(error)
  return res.status(500).send(createResponse(false, (error as any).toString(), null));
}
};
export default handler;
