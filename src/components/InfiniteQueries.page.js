import axios from "axios";
import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

export const InfiniteQueriesPage = () => {
  const fetchColors = (pageParams = 1) => {
    return axios.get(
      `http://localhost:4000/colors?_limit=2&_page=${pageParams}`
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
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>Paginated Queries Page</div>

      <div>
        <h3>Colors Data</h3>
        <div>
          {data?.pages.map((group, index) => (
            <Fragment key={index}>
              {group.data.map((color) => (
                <div key={color.id}>{color.label}</div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
      <button onClick={fetchNextPage} disabled={!hasNextPage}>
        Load More
      </button>
    </>
  );
};
