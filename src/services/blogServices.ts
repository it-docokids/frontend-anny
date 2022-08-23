import axios, { AxiosResponse } from "axios";
import { blogs, blogItem } from "../types/api";

const instance = axios.create({
  baseURL: "https://apidocokids.herokuapp.com/",
  timeout: 3000,
});

const responseBody = (response: AxiosResponse) => response.data.results;
const request = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const DataBlog = {
  getItemsBlog: (): Promise<blogs[]> => request.get("v1/home/blogs/"),
  getArticle: (id: number): Promise<blogItem[]> =>
    request.get(`v1/home/blogs/?id=${id}`),
};
