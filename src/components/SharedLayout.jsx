import React from "react";
import { Link } from "react-router-dom";
import "/src/components/Styles.scss";

const SharedLayout = () => {
    return(
        <nav className="header">
            <Link to="/" > Home </Link>
            <Link to="/movies">Movies</Link>
        </nav>
    )
}

export default SharedLayout;