import { Link } from "react-router-dom";
import { useState } from "react";
import {
  useAddSuperheroData,
  useSuperheroesData,
} from "../hooks/useSuperheroesData";

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { loading, data, isError, error, refetch } = useSuperheroesData();
  const { mutate: addHero } = useAddSuperheroData()
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleAddHeroClick = () => {
    addHero({ name, alterEgo });
  };

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
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
