import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MovieList from "./MovieList";
import SingleMovie from "./SingleMovie";

const GenresComponent = () => {
  return (
    <div
      className="container-fluid px-4 "
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="dropdown ml-4 mt-1">
            <Dropdown.Toggle
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </Dropdown.Toggle>
            <Dropdown
              className="dropdown-menu bg-dark"
              aria-labelledby="dropdownMenuButton"
            >
              <NavDropdown.Item
                className="dropdown-item text-white bg-dark"
                href="#c"
              >
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item text-white bg-dark"
                href="#c"
              >
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item text-white bg-dark"
                href="#c"
              >
                Thriller
              </NavDropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
      <h4>The Lord Of The Rings</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <MovieList movie={"the lord of the rings"} />
      </div>
      <h4>Harry Potter</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <MovieList movie={"harry Potter"} />
      </div>
      <h4>Jurassic Park</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <MovieList movie={"Jurassic Park"} />
      </div>
    </div>
  );
};

export default GenresComponent;
