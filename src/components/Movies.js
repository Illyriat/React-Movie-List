import React from "react";

const Movies = ({name, children}) => {
    return ( 
        <>
            <h4><a href={children}>{name}</a></h4>
        </>
     );
}
 
export default Movies;