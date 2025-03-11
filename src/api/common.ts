import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Hàm tạo API client với ProjectId tùy chỉnh
const createApiClient = (projectId: number, authorization?: string): AxiosInstance => {
  return axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "projectId": projectId, // Đổi projectId khi gọi API
      "Authorization":`Bearer ${authorization}`
    },
  });
};

// Hàm gọi API chung (dùng chung cho mọi API)
export const apiRequest = async <T>(
  projectId: number,
  method: "GET" | "POST",
  url: string,
  authorization?: string,
  data?: any,
  config?: AxiosRequestConfig,

): Promise<T> => {
  try {
    const apiClient = createApiClient(projectId, authorization); // Tạo client với projectId
    const response = await apiClient.request<T>({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
