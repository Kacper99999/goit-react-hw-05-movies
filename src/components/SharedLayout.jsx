import React from "react";
import { Link } from "react-router-dom";
const SharedLayout = () => {
    return(
        <nav>
            <Link to="/" > Home </Link>
            <Link to="/movies">Movies</Link>
        </nav>
    )
}

export default SharedLayout;