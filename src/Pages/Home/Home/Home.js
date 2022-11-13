import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Button, Image } from "react-bootstrap";
import image from "./images/cloud_kitchen.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import useTitle from "../../../hooks/useTitle";
// import useTitle from "../../hooks/useTitle";

const Home = () => {
  // useTitle("Blogs");
  const [services, setServices] = useState([]);
  useTitle("Home");

  useEffect(() => {
    fetch(" https://new-server-seven.vercel.app/serviceslimit")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="text-center">
      <div className="d-md-flex">
        {/* <Image src={image} style={{ width: "100vh" }}></Image> */}
        <img
          src={image}
          className="img-fluid shadow-4"
          alt="..."
          style={{ height: 400 }}
        />
        <h2 className="text text-center">Welcome to our cloud Kitchen!</h2>
      </div>
      <br />
      <div>
        <h3>Meal Items</h3>
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-7">
            {services.map((serve) => (
              // <ServiceCard>
              //   key={serve._id}
              //   serve={serve}
              // </ServiceCard>
              <div className="col">
                <div class="card">
                  <img
                    src={serve.url}
                    class="card-img-top"
                    alt="Fissure in Sandstone"
                    style={{ height: 300 }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Item: {serve.serviceName}</h5>
                    <h5 class="card-title">Price: {serve.price} tk</h5>
                    <p class="card-text">
                      {serve.description.length > 100
                        ? serve.description.slice(0, 100) + "..."
                        : serve.description}
                    </p>
                    <Link className="link" to={`/services/${serve._id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button variant="light">
          <Link className="link" to="/services">
            See All
          </Link>
        </Button>
        <div></div>
        <br />
        <br />
        <br />
        <h3>Available Now</h3>
        <br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img
                src={img1}
                style={{ height: 300 }}
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Bashundhara R/A</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src={img2}
                style={{ height: 300 }}
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Dhanmondi</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src={img3}
                style={{ height: 300 }}
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Uttara</h5>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
