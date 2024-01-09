import { Link } from "react-router-dom";
import { useSuperheroesData } from "../hooks/useSuperheroesData";

export const RQSuperHeroesPage = () => {
  const { loading, data, isError, error, refetch } = useSuperheroesData();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data?.map((hero) => {
        return (
          <div key={hero.id}>
          <Link to={`/rq-super-hero/${hero.id}`} key={hero.id}>
            {hero.name}
          </Link>
          </div>
        );
      })}
      <button onClick={refetch}>Fetch heroes</button>
    </>
  );
};
