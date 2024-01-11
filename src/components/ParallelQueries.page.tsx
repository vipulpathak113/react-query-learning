import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Friend, Hero } from "../types/types";

export const ParallelQueriesPage = () => {
  const fetchSuperheroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

  const { data: superheroes } = useQuery("super-heroes", fetchSuperheroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <>
      <Typography variant="h4">Parallel Queries Page</Typography>

      <Box>
        <Typography variant="h5">Superheroes Data</Typography>
        <List>
          {superheroes?.data.map((hero: Hero) => (
            <ListItem key={hero.id}>
              {" "}
              <ListItemText primary={hero.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h5">Friends Data</Typography>
        <List>
          {friends?.data.map((friend: Friend) => (
            <ListItem key={friend.id}>
              <ListItemText primary={friend.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
