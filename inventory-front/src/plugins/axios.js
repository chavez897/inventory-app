/* eslint-disable default-case */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://3.230.40.14:8000`,
});