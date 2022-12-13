interface CustomApiResponse<type> {
  status: boolean;
  message: string;
  timestamp: Date,
  payload: type;
}