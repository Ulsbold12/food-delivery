import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem("accessToken")}`,
  },
});
