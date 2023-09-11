import axios from "axios";

export const api = axios.create({
  baseURL: "https://job.risestudio.com.br",
});
