import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import propTypes from "prop-types";
import "/src/components/Styles.scss";

const api_key = "b942b8bf626a04f48b07153a95ee51a0";

const Cast = () =>{
    const{id} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(()=>{
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`).then(res => setCast(res.data.cast)).catch(error => console.error("Error fetching movie:", error));
    },[id]);

    return(
        <div className="cast">
            <ul>
                {cast && cast.map(actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
                        <h3>{actor.name}</h3>
                        <p>Character : {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Cast.propTypes = {
    id : propTypes.string,
    cast : propTypes.array
}

export default Cast;