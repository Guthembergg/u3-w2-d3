import { Component } from "react";
import { Image, Spinner, Alert, Modal, Button } from "react-bootstrap";
import ModalComp from "./ModalComp";

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

  fetchMovie = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=46c9a463&i=${this.props.movie.imdbID}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          movie: data,
          // isLoading: false,
        });
      } else {
        this.setState({
          // isLoading: false,
          // hasError: true,
          errorMessage: `Error loading content ERROR: ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        // isLoading: false,
        // hasError: true,
        errorMessage: `CATCH FATAL ERROR: ${error.message}`,
      });
    }
  };
  componentDidMount = () => {
    this.fetchMovie();
    console.log(this.state.movie);
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
          <ModalComp movie={this.state.movie} error={this.state.errorMessage} />
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
