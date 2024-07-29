import { useState } from "react";
import MovieComp from "./MovieComp";
import camel from '../pictures/camel.jfif'
import monkey from '../pictures/monkey.jfif'
import gorilla from '../pictures/gorilla.jfif'
import squirl from '../pictures/squirl.jfif'

const SiteComp = () => {
    const [moviesData, setMoviesData] = useState([
        { id: 1, title: 'GG', image: gorilla },
        { id: 2, title: 'MM', image: monkey },
        { id: 3, title: 'SS', image: squirl },
        { id: 4, title: 'CC', image: camel }
    ]);


    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    console.log();
    return (
        <div style={{ border: "10px #f094dc88", padding: "50px", background: "#f094dc57", borderRadius: "15px" }}>
            <h1>
                Pick A Movie PLZ!
            </h1>

            <div>
                <h2>Select a Movie:</h2>
                <select onChange={(e) => {handleSelectMovie(e.target.value); console.log(e.target.value)}}>
                    <option value="">Select a movie PLZ</option>
                    {moviesData.map((movie) => (
                        <option key={movie.id} value={movie.id}>
                            {movie.title}
                        </option>
                    ))}
                </select>
                {selectedMovie && (
                    <div>
                        <h3>Selected Movie:</h3>

                        <MovieComp movie={selectedMovie} />
                    </div>
                )}
            </div>
    
        </div>
    );
};

export default SiteComp;