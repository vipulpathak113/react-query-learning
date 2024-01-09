import React from 'react'
import { useQuery } from "react-query";
import axios from "axios";


export const ParallelQueriesPage = () => {

    const fetchSuperheroes=()=>{
        return axios.get('http://localhost:4000/superheroes')
    }

    const fetchFriends=()=>{
        return axios.get('http://localhost:4000/friends')
    }

    const {data:superheroes}= useQuery('super-heroes',fetchSuperheroes)
    const {data:friends}= useQuery('friends',fetchFriends)

  return (
    <>
    <h1>Parallel Queries Page</h1>

    <div>
        <h3>Superheroes Data</h3>
        <div>{superheroes?.data.map(hero=>(
            <div key={hero.id}>{hero.name}</div>
        ))}</div>
    </div>
    <div>
        <h3>Friends Data</h3>
        <div>{friends?.data.map(friend=>(
            <div key={friend.id}>{friend.name}</div>
        ))}</div>
    </div>
    </>
  )
}
