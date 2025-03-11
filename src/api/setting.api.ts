
import { apiRequest } from "./common";


export const getKeys = async (keys: string): Promise<Keys> => {
  const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyX25hbWUiOiJMTlQgMjA0IiwiY29tcGFueV9pZCI6MTAwMDAwLCJicmFuY2hfaWRzIjpbMTAwMDAwXSwidXNlcl9pZCI6MSwicHJpdmlsZWdlX2dyb3VwX2lkIjoxLCJwcml2aWxlZ2VfY29kZXMiOlsiQURNSU4iXSwiaWF0IjoxNzQwODIzMjYwLCJleHAiOjE3NzIzNTkyNjB9.m5ocHwjKFRjOJE6d_FBW5qFoSUqYx7RTtpKAXCAFTsU'
  const data: BaseResponse = await apiRequest(1233,"GET", `/v1/api-key-setting/get-keys?keys=${keys}`,authorization);
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