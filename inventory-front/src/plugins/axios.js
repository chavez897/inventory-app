/* eslint-disable default-case */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://myloadbalancer-3af85ad6c35d19ff.elb.us-east-1.amazonaws.com:8000`,
});