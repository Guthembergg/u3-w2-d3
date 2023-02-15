import { Modal, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommentArea from "./CommentArea";

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
          <Row className="mt-5 d-flex align-items-center text-center flex-column w-100">
            <Col
              xs={7}
              className="mt-5 d-flex align-items-center text-center flex-column"
            >
              <div className="justify-content-center ">
                <h2
                  className="text-center"
                  style={{ fontWeight: "700", color: "white" }}
                >
                  {movie.Title}
                </h2>
              </div>
              <div>
                <p
                  className="text-center"
                  style={{ fontWeight: "700", color: "grey" }}
                >
                  {movie.Actors}
                </p>
                <h3
                  className="text-center "
                  style={{ fontWeight: "400", color: "white" }}
                >
                  {movie.Plot}
                </h3>
                <div className="d-flex justify-content-between mt-5">
                  <p
                    className="ml-5"
                    style={{ color: "orange", fontWeight: "700" }}
                  >
                    {movie.imdbRating}{" "}
                  </p>
                  <p style={{ color: "white", fontWeight: "700" }}>
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
              </div>
            </Col>
          </Row>
          <Row xs={7} className="d-flex mt-5 w-100">
            <Col className="d-flex align-items-center text-center flex-column">
              <h2>Comment Area</h2>
              <CommentArea asin={movieParam.movieId} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default MovieDetails;
