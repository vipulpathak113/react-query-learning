import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

export const DynamicParallelPage = ({ heroIds }) => {
  const fetchSuperhero = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`);
  };

  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperhero(id),
      };
    })
  );

  console.log(queryResults);

  return <div>DynamicParallel.page</div>;
};
