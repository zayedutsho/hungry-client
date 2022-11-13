import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import "./ServiceDetails.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Review from "./Review";
import useTitle from "../../../hooks/useTitle";

const ServiceDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const { serviceName, ratings, description, price, url } = useLoaderData();
  useTitle("Meal Details");
  return (
    <div>
      <h1 className="text-center">Meal Details</h1>

      <div className="flex mt-6">
        <div
          className="card col d-flex justify-content-center mx-auto text-center"
          style={{ width: 500 }}
        >
          <img src={url} class="card-img-top" alt="Fissure in Sandstone" />
          <div class="card-body">
            <h5 class="card-title">Item: {serviceName}</h5>
            <p class="card-text">
              {description.length > 100
                ? description.slice(0, 100) + "..."
                : description}
            </p>
            <p>Price: {price} tk</p>
            <p>Ratings: {ratings} stars</p>
            <>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                View More
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </div>
        </div>
        <Review></Review>
      </div>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  const { serviceName, ratings, description, price, url } = useLoaderData();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {serviceName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={url} class="card-img-top" alt="Fissure in Sandstone" />
        <h4>Description</h4>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Ratings: {ratings}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ServiceDetails;
