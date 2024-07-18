import axios from 'axios'

const api_key = "b942b8bf626a04f48b07153a95ee51a0";

export const fetchMoves = () =>{
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`)
    .then(res => {
        const {results} = res.data;
        return results.map(movie => movie);
    }).catch(error => console.error("Error fetching movie:", error));
}




