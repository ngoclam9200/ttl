
import { apiRequest } from "./common";


export const getProduct = async (keys: string): Promise<Keys> => {
  const data: BaseResponse = await apiRequest(1292,"GET", `/v1/products/`);
  return data.data

};
export interface Keys{
    key: string
}
export interface BaseResponse{
    status: number,
    message: string,
    data: Keys
}