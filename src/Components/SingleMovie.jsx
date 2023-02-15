import { Component } from "react";
import { Image, Spinner, Alert, Modal, Button } from "react-bootstrap";
import ModalComp from "./MovieDetails";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
  state = {
    movie: [],
    isLoading: false,
    hasError: false,
    errorMessage: "",
    selected: false,
    selectedMovie: "",
    show: false,
  };

  render() {
    return (
      <div
        value={this.props.movie.Title}
        className="col mb-2 px-1"
        style={{
          borderBottom:
            this.state.selected && !this.state.hasError
              ? "1px solid grey"
              : "0px",
        }}
      >
        {this.state.movie && (
          // <ModalComp movie={this.state.movie} error={this.state.errorMessage} />
          <Link
            className="mb-3 mt-3 btn btn-primary"
            variant="outline-light"
            to={`/movie-details/${this.props.movie.imdbID}`}
          >
            More info
          </Link>
        )}

        <Image
          className="img-fluid"
          style={{ aspectRatio: "0.67" }}
          src={this.props.movie.Poster}
          alt="movie "
          fluid
          onClick={(e) =>
            this.setState(
              {
                selected: !this.state.selected,
                selectedMovie: this.props.movie.Title,
              },
              () => {
                console.log(this.state.selectedMovie);
              }
            )
          }
        />

        {this.state.selected && (
          <div
            className="pt-3"
            style={{
              color: "white",
            }}
          >
            {this.props.movie.Title}
            <div
              style={{
                color: "orange",
              }}
            >
              {this.props.movie.Year}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleMovie;
