import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export const PaginatedQueriesPage = () => {
  const fetchColors = (pageNumber) => {
    return axios.get(
      `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
    );
  };

  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, data } = useQuery(["colors", pageNumber], () =>
    fetchColors(pageNumber)
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Paginated Queries Page
      </Typography>

      <Typography variant="h5" gutterBottom>
        Colors Data
      </Typography>

      <List>
        {data?.data.map((color) => (
          <ListItem key={color.id}>
            <ListItemText primary={color.label} />
          </ListItem>
        ))}
      </List>

      <Button
        id=""
        variant="contained"
        sx={{ marginX: 3 }}
        color="secondary"
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Prev{" "}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setPageNumber((page) => page + 1)}
        disabled={pageNumber === 4}
      >
        Next{" "}
      </Button>
    </>
  );
};
