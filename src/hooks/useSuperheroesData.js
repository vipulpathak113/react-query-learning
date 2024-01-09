import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const addSuperhero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

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

export const useAddSuperheroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperhero, {
    onSuccess: (data) => {
      queryClient.setQueryData("super-heroes", (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        };
      });
    },
    // queryClient.invalidateQueries("super-heroes")
  });
};
