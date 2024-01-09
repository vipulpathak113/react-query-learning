import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const useSuperheroData = (heroId) => {
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
          .getQueryData("super-heroes")
          ?.data?.find((hero) => hero.id === heroId);
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
