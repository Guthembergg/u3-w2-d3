import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ModalComp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="mb-3 mt-3"
        variant="outline-light"
        onClick={handleShow}
      >
        More info
      </Button>
      <Modal show={show} onHide={handleClose}>
        {!props.error && (
          <>
            <Modal.Header className="justify-content-center">
              <Modal.Title className="text-center">
                {props.movie.Title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ fontWeight: "700" }}>{props.movie.Actors}</p>
              <p>{props.movie.Plot}</p>
              <div className="d-flex justify-content-between">
                <p
                  className="ml-5"
                  style={{ color: "orange", fontWeight: "700" }}
                >
                  {props.movie.imdbRating}{" "}
                </p>
                <p className="" style={{ color: "blue", fontWeight: "700" }}>
                  {props.movie.Released}{" "}
                </p>
                <p className="" style={{ color: "grey", fontWeight: "700" }}>
                  {props.movie.Runtime}{" "}
                </p>
                <p
                  className=" mr-5"
                  style={{ color: "green", fontWeight: "700" }}
                >
                  {props.movie.Rated}{" "}
                </p>
              </div>
            </Modal.Body>
          </>
        )}

        {props.error && (
          <>
            <Modal.Header className="justify-content-center">
              <Modal.Title className="text-center">Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{props.error}</p>
            </Modal.Body>
          </>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;
