import { Link } from "react-router-dom";
import { useState } from "react";
import {
  useAddSuperheroData,
  useSuperheroesData,
} from "../hooks/useSuperheroesData";
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { Hero } from "../types/types";

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { isLoading, data, isError, error, refetch } = useSuperheroesData();
  const { mutate: addHero } = useAddSuperheroData();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h1>{(error as any).message}</h1>;
  }

  const handleAddHeroClick = () => {
    addHero({ name, alterEgo });
  };

  return (
    <>
      <Typography variant="h4">React Query Super Heroes Page</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "15rem"  },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="Name"
          value={name}
          variant="filled"
          size="small"
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-controlled"
          label="Alter Ego"
          value={alterEgo}
          variant="filled"
          size="small"
          onChange={(e) => setAlterEgo(e.target.value)}
        />
      </Box>
      <Button
        onClick={handleAddHeroClick}
        variant="contained"
        sx={{ marginY: 2 }}
      >
        Add Hero{" "}
      </Button>
      <List>
        {data?.data?.map((hero:Hero) => {
          return (
            <ListItem key={hero.id}>
              <Link to={`/rq-super-hero/${hero.id}`} key={hero.id}>
                {hero.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
      {/* <Button onClick={refetch} variant="contained" sx={{ marginY: 2 }}>
        Fetch heroes
      </Button> */}
    </>
  );
};
