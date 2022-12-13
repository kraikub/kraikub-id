import { NextApiResponse } from 'next';
export const createResponse = (status: boolean, message: string, payload: any): CustomApiResponse<any> => {
  return {
    status,
    message,
    payload,
    timestamp: new Date(Date.now())
  }
}

export const response = (res: NextApiResponse, httpStatus: number, status: boolean, message: string, payload: any) => {
  return res.status(httpStatus).send(createResponse(status, message, payload))
}