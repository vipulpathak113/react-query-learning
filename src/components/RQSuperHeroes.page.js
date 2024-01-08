import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const { loading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data?.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })}
    </>
  );
};
