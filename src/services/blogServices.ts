import axios, { AxiosResponse } from "axios";
import { blogs } from "../types/api";
export async function getBlogs() {
  return axios
    .get<blogs[]>("https://apidocokids.herokuapp.com/v1/home/blogs/")
    .then((response: AxiosResponse) => {
      const data: Array<blogs>[] = response.data.results;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
