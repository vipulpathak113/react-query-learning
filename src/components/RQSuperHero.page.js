import React from "react";
import { useSuperheroData } from "../hooks/useSuperheroData";
import { useParams } from "react-router-dom";

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperheroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      RQ SuperHero Page
      <div>
        {data?.data.name} {data?.data.alterEgo}
      </div>
    </div>
  );
};
