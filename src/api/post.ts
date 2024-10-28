import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { PostsDTO } from "../utils/interfaces/PostsDTO";

const postInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const useGetPosts = (): UseQueryResult<Array<PostsDTO>, Error> => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return (await postInstance.get("/")).data;
    },
  });
};
