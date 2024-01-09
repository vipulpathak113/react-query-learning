import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

export const InfiniteQueriesPage = () => {
  const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(
      `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
    );
  };

  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["colors"],
    fetchColors,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Paginated Queries Page
      </Typography>

      <Box>
        <Typography variant="h5" gutterBottom>
          Colors Data
        </Typography>
        <List>
          {data?.pages.map((group, index) => (
            <Fragment key={index}>
              {group.data.map((color) => (
                <ListItem key={color.id}>
                  <ListItemText>{color.label}</ListItemText>
                </ListItem>
              ))}
            </Fragment>
          ))}
        </List>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        mt={2}
        mr={2}
        onClick={fetchNextPage}
        disabled={!hasNextPage}
      >
        Load More
      </Button>
    </>
  );
};
