import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { fetchMoves } from "/src/components/apiTrending";


const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() =>{
        fetchMoves().then(movies =>{setMovies(movies)})
    },[])
    
    return(
        <div>
            {movies.map((movie) => (
          <li key={movie.id}>
            <Link to = {`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
        </div>
    )

}

export default Home;