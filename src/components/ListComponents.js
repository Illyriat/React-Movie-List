import React from "react";
import Movies from "./Movies";

const ListComponent = ({ movies }) => {
    return (
        <div className="movie-table-container">
            <table className="movie-table">
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>More Info</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <Movies key={movie.id} name={movie.name} url={movie.url} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListComponent;
