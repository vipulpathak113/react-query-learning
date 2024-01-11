import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export const DependentQueriesPage = ({ email }: { email: string }) => {
  const fetchUserByEmail = (email: string) => {
    return axios.get(`http://localhost:4000/users/${email}`);
  };

  const fetchCourseByChannelId = (id: number) => {
    return axios.get(`http://localhost:4000/channels/${id}`);
  };

  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCourseByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>RQ Dependent Query Page</Typography>
      <Typography variant="body1" gutterBottom>{courses?.data.id}</Typography>
      <List>
        {courses?.data?.courses.map((course: number[], index: number) => {
          return (
            <ListItem key={index}>
              <ListItemText primary={course} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
