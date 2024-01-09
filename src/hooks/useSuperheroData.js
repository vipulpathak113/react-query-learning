import { useQuery } from "react-query";
import axios from "axios";

export const useSuperheroData = (heroId) => {
  return useQuery(["super-hero", heroId], ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${id}`);
  });
};
