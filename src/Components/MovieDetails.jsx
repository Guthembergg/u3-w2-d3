import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import Loading from "./Loading";
import Error from "./Error";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } else {
        setError(`Error loading content ERROR: ${response.status}`);
        setLoading(false);
      }
    } catch (error) {
      setError(`CATCH FATAL ERROR: ${error.message}`);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      {!loading && error && !movie && (
        <div className="d-flex ">
          <Error />
        </div>
      )}

      {loading && !error && !movie && (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      )}
      {movie && !error && (
        <>
          <Row className="mt-5 mb-5 d-flex  text-center flex-row w-100 ">
            <Col
              xs={7}
              className=" d-flex align-items-center text-center flex-column ml-5"
            >
              <h1
                className="text-center mb-3"
                style={{ fontWeight: "800", color: "white" }}
              >
                {movie.Title}
              </h1>
              <Image
                className="img-fluid mb-5"
                style={{ aspectRatio: "0.67" }}
                src={movie.Poster}
                alt="movie "
                fluid
              />
              <div className="justify-content-center "></div>
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
            <Col
              className="d-flex align-items-center text-center flex-column mt-5"
              xs={4}
            >
              <h2 style={{ color: "orange", fontWeight: "700" }}>
                Comment Area
              </h2>
              <CommentArea asin={movieParam.movieId} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default MovieDetails;
