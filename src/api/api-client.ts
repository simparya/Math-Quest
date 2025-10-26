import { handleApiError } from "@/api/utils/api-response.util";
import axios from "axios";

// ✅ Create an Axios instance for client-side API calls
const API_CLIENT = axios.create({
  baseURL: "/api", // Calls Next.js API Routes
  withCredentials: true, // ✅ Ensures cookies are sent automatically
  timeout: 90000, // 90 seconds
});

// ✅ Automatically handle errors
API_CLIENT.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return handleApiError(error);
  },
);

export default API_CLIENT;
