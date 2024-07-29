const MovieComp = ({ movie }) => {
    console.log(movie);
    return (
        <div style={{ border: "10px #b281eb48", padding: "50px", background: "#b281eb48", borderRadius: "15px", margin: "10px" }}>
            <h4>{movie.name}</h4>

            <div>
                <img src={movie.image} alt="YOU CAN'T SEE THE MOVIE IMAGE WHAT A SHAME" />

            </div>
        </div>
    )
}


export default MovieComp;