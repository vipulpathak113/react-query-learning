import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const addSuperhero = (hero) => {
  return request({url:'/superheroes',method:"post",data:hero})
};

export const useSuperheroesData = () => {
  return useQuery(
    "super-heroes",
    () => {
      return request({url:"/superheroes"});
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
    // onSuccess: data => {
    //   /** Query Invalidation Start */
    //   // queryClient.invalidateQueries('super-heroes')
    //   /** Query Invalidation End */

    //   /** Handling Mutation Response Start */
    // queryClient.setQueryData('super-heroes', oldQueryData => {
    //   return {
    //     ...oldQueryData,
    //     data: [...oldQueryData.data, data.data]
    //   }
    // })
    //   /** Handling Mutation Response Start */
    // },
    /**Optimistic Update Start */
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return { previousHeroData };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("super-heroes", context?.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
    /**Optimistic Update End */
  });
};
