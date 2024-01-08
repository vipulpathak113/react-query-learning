import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const { loading, data,isError,error,refetch } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  },{
    enabled: false,
    onSuccess: (data)=>{
      console.log("data fetched",data)
    },
    onError: (error)=>{
      console.error("fetching failed",error)
    }
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data?.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })}
      <button onClick={refetch}>Fetch heroes</button>
    </>
  );
};
