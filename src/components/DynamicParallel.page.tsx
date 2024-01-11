import React from "react";
import axios from "axios";
import { useQueries } from "react-query";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export const DynamicParallelPage = ({ heroIds }: { heroIds: number[] }) => {
  const fetchSuperhero = (id: number) => {
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

  return (
    <>
      <Typography variant="h4" gutterBottom>Parallel Queries Page</Typography>
      <Box>
        <Typography variant="h5">Superheroes Data</Typography>
        <List>
          {queryResults.map((item) => {
            return (
              <ListItem key={item?.data?.data.id}>
                <ListItemText primary={item?.data?.data.name} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};
