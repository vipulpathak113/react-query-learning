import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

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
      <div>Paginated Queries Page</div>

      <div>
        <h3>Colors Data</h3>
        <div>
          {data?.data.map((color) => (
            <div key={color.id}>{color.label}</div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Prev{" "}
      </button>
      <button onClick={() => setPageNumber((page) => page + 1)} disabled={pageNumber === 4}>
        Next{" "}
      </button>
    </>
  );
};
