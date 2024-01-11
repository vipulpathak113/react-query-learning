import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Hero } from "../types/types";

export const useSuperheroData = (heroId:number) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["super-hero", heroId],
    ({ queryKey }) => {
      const id = queryKey[1];
      return axios.get(`http://localhost:4000/superheroes/${id}`);
    },
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData<any>("super-heroes")
          ?.data?.find((hero:Hero) => hero.id === heroId);
        if (hero) {
          return {
            data: hero,
          };
        } else {
          return undefined;
        }
      },
    }
  );
};
