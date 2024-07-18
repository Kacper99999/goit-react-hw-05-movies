import React, { useEffect, useState } from "react";
import {  Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import propTypes from "prop-types";
import "/src/components/Styles.scss";

const api_key = "b942b8bf626a04f48b07153a95ee51a0";


const Movies = () => {
    const [movies , setMovies] = useState([]);
    const [search, setSearch] = useSearchParams();
    const query = search.get("query") || "";

    useEffect(()=>{
        if(query){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`).then((res) => setMovies(res.data.results)).catch(console.error("error"));
        }
    },[query])


    const onSubmit = (e) =>{
        e.preventDefault();
        setSearch({query:e.target.elements[0].value})
    }

    return (
        <div>
            <form className="search" onSubmit={onSubmit}>
            <input type="text"/>
            <input type="submit" value="Search"/>
            </form>
            {movies.length === 0 && query && ( <h1>No Movies Found</h1>)}
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

Movies.propTypes = {
    movies : propTypes.array,
    search : propTypes.string
}

export default Movies;