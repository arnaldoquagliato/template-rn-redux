export interface Request {
  loading: boolean;
  error: boolean;
  sucess: boolean;
}

export type RequestAction = {
  type: string;
  data: Request;
};
