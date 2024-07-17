import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import "/src/components/Styles.scss";

const api_key = "b942b8bf626a04f48b07153a95ee51a0";

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`).then(res => setMovie(res.data))
    },[id])
    

    if(!movie){
       return <p>Loading...</p>
    }
    

      return (
        <div>
          <Link to={backLinkHref}> go back</Link>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
          <h1>{movie.title}({movie.release_date.substring(0,4)})</h1>
          <p>{movie.overview}</p>
          <ul>
        {movie.genres.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
      <Outlet/>
        </div>
      );
};

export default MovieDetails;


