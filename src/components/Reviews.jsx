import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import propTypes from "prop-types";
import "/src/components/Styles.scss";

const api_key = "b942b8bf626a04f48b07153a95ee51a0";

const Reviews = () =>{

    const [reviews, setReviews] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}`).then(res => setReviews(res.data.results)).catch(error => console.error("Error fetching movie:", error));
    },[id])
    return(
        <div className="reviews">
            <ul>
                {reviews.map(rev => (
                    <li key ={rev.id}>
                        <div>
                           <h3>Author : {rev.author}</h3>
                           <p>{rev.content}</p> 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Reviews.propTypes = { 
    id : propTypes.string,
    reviews : propTypes.array
}

export default Reviews;