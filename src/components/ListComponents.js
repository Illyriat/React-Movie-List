import React from "react";
import Movies from "./Movies";


const ListComponent = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <Movies name={movie.name} key={movie.id}>{movie.url}</Movies>
          );
        });

    return(
        <div>
            {movieNodes}
        </div>
    )

};


export default ListComponent;