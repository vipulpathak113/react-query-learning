import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box marginBottom={2}>
      <nav>
        <List>
          <ListItem>
            <Link to="/">Traditional Super Heroes</Link>
          </ListItem>
          <ListItem>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </ListItem>
          <ListItem>
            <Link to="/rq-parallel">RQ Parallel Queries</Link>
          </ListItem>
          <ListItem>
            <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel Queries</Link>
          </ListItem>
          <ListItem>
            <Link to="/rq-dependent">RQ Dependent Queries</Link>
          </ListItem>
          <ListItem>
            <Link to="/rq-paginate">RQ Paginated Queries</Link>
          </ListItem>
          <ListItem>
            <Link to="/rq-infinite">RQ Infinite Queries</Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
