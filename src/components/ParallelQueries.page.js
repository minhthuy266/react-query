import { useQuery } from "react-query"
import axios from "axios"
import { Link } from "react-router-dom"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends")
}

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes)
  const { data: friends } = useQuery("friends", fetchFriends)

  return (
    <>
      {superHeroes?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        )
      })}
      <div>ParallelQueriesPage</div>

      {friends?.data.map((friend) => {
        return (
          <div key={friend.id}>
            <Link to={`/rq-super-friends/${friend.id}`}>{friend.name}</Link>
          </div>
        )
      })}
    </>
  )
}

export default ParallelQueriesPage
