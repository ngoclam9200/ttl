
import { apiRequest } from "./common";


export const getKeys = async (keys: string): Promise<Keys> => {
  const data: BaseResponse = await apiRequest("GET", `/v1/api-key-setting/get-keys?keys=${keys}`);
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