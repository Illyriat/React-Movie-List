import React from "react";

const Movies = ({ name, url }) => {
    return (
        <tr>
            <td>{name}</td>
            <td><a href={url} target="_blank" rel="noopener noreferrer">View on IMDB</a></td>
        </tr>
    );
};

export default Movies;
