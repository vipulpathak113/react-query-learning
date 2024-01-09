import React from "react";
import { useSuperheroData } from "../hooks/useSuperheroData";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

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
    <Box>
      <Typography variant="h4" gutterBottom> RQ SuperHero Page</Typography>
      <Box>
      <Typography variant="body1">{data?.data.name} {data?.data.alterEgo}</Typography>
      </Box>
    </Box>
  );
};
