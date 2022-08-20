import axios, { AxiosResponse } from "axios";
import { blogs } from "../types/api";

const instance = axios.create({
  baseURL: "https://apidocokids.herokuapp.com/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;
const request = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const DataBlog = {
  getItemsBlog: (): Promise<blogs[]> => request.get("v1/home/blogs/"),
};
