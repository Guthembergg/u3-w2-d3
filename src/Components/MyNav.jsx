import { Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Navbar.Brand className="navbar-brand" href="#w">
        <img
          src={require("../assets/logo.png")}
          alt=""
          style={{ width: "100px", height: "55px" }}
        />
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <Navbar className="navbar-nav mr-auto">
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link font-weight-bold" href="#d">
              Home <span className="sr-only">(current)</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item active">
            <Nav.Link className="nav-link font-weight-bold" href="#j">
              TV Shows
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link font-weight-bold" href="#j">
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link font-weight-bold" href="#g">
              Recently Added
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link font-weight-bold" href="#h">
              My List
            </Nav.Link>
          </Nav.Item>
        </Navbar>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
