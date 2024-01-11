import { useState, useEffect } from "react";
import axios from "axios";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Hero } from "../types/types";


export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Box>
      <Typography variant="h4">Super Heroes Page</Typography>
      <List>
        {data.map((hero: Hero, index) => {
          return (
            <ListItem key={index}>
              <ListItemText primary={hero.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
