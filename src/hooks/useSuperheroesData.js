import { useQuery } from "react-query";
import axios from "axios";

export const useSuperheroesData = () => {
  return useQuery(
    "super-heroes",
    () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    {
      onSuccess: (data) => {
        console.log("data fetched", data);
      },
      onError: (error) => {
        console.error("fetching failed", error);
      },
      // select: (data) => {
      //   //used to transform original data
      // },
    }
  );
};
