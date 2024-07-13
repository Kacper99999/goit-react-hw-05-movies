import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

const api_key = "b942b8bf626a04f48b07153a95ee51a0";


export const Movies = () => {
    const [state, setState] = useState("");
    const [movies , setMovies] = useState([]);

    useEffect(()=>{
        if(state){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${state}`).then((res) => setMovies(res.data.results))
        }
        console.log(movies);
    },[state])

    const onSubmit = (e) =>{
        e.preventDefault();
        setState(e.target.elements[0].value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <input type="text" />
            <input type="submit"/>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};