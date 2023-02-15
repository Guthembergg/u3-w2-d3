import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [trueMovie, settrueMovie] = useState(null);

  const movieParam = useParams();

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=46c9a463&i=${movieParam.movieId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMovie(data);
        // isLoading: false,
      } else {
        setError(`Error loading content ERROR: ${response.status}`);
      }
    } catch (error) {
      setError(`CATCH FATAL ERROR: ${error.message}`);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      {movie && (
        <>
          <div className="justify-content-center ">
            <p
              className="text-center"
              style={{ fontWeight: "700", color: "white" }}
            >
              {movie.Title}
            </p>
          </div>
          <div>
            <p
              className="text-center"
              style={{ fontWeight: "700", color: "white" }}
            >
              {movie.Actors}
            </p>
            <p
              className="text-center"
              style={{ fontWeight: "700", color: "white" }}
            >
              {movie.Plot}
            </p>
            <div className="d-flex justify-content-between">
              <p
                className="ml-5"
                style={{ color: "orange", fontWeight: "700" }}
              >
                {movie.imdbRating}{" "}
              </p>
              <p className="" style={{ color: "blue", fontWeight: "700" }}>
                {movie.Released}{" "}
              </p>
              <p className="" style={{ color: "grey", fontWeight: "700" }}>
                {movie.Runtime}{" "}
              </p>
              <p
                className=" mr-5"
                style={{ color: "green", fontWeight: "700" }}
              >
                {movie.Rated}{" "}
              </p>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default MovieDetails;
