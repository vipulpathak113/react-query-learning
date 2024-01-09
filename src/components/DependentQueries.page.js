import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const DependentQueriesPage = ({ email }) => {
  const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
  };

  const fetchCourseByChannelId = (id) => {
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

  console.log(courses);

  return <div>DependentQueries.page</div>;
};
