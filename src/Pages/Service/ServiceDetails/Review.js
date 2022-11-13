import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLoaderData } from "react-router-dom";
import "./Review.css";
import { Link } from "react-router-dom";
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
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName } = useLoaderData();
  const [revw, setRevw] = useState([]);

  useEffect(() => {
    fetch(" https://new-server-seven.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setRevw(data);
        console.log(data);
      });
  }, [revw]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.description.value;

    const review = {
      service: __dirname,
      id: _id,
      serviceName: serviceName,
      uid: user?.uid,
      name: user?.displayName,
      image: user?.photoURL,
      description: description,
    };

    fetch(" https://new-server-seven.vercel.app/addReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Added");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        {user?.uid ? (
          // <h1 className="text-center">Logged in</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div className="text-center">
                  <label class="form-label" for="textAreaExample">
                    Give a review
                  </label>
                </div>
                <textarea
                  style={{ height: "100px", width: "400px" }}
                  name="description"
                  class="form-control"
                  id="textAreaExample"
                  className="d-flex justify-content-center mx-auto text-center"
                  rows="4"
                  required
                ></textarea>
                <div className="text-center">
                  <input class="btn" type="submit" value="Add" />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <h3 className="text-center mt-4">
            Please login to review item! &nbsp;
            <Link className="link" to="/login">
              Login
            </Link>
          </h3>
        )}
      </div>
      <br />
      <br />
      <div>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4">Reviews</h3>
          </MDBCol>
        </MDBRow>
        <MDBContainer className="py-5 mr-4">
          <MDBRow className="text-center d-md-flex">
            <MDBCol md="4" className="mb-5 mr-4 mb-md-0 d-md-flex">
              {revw.map((r) =>
                _id === r.id ? (
                  <MDBCard className="testimonial-card">
                    <div
                      className="card-up"
                      style={{ backgroundColor: "#7a81a8" }}
                    ></div>
                    <div className="avatar mx-auto bg-white">
                      <img src={r.image} className="rounded-circle img-fluid" />
                    </div>
                    <MDBCardBody>
                      <h4 className="mb-4">{r.name}</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        {r.description}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                ) : !r.id ? (
                  <div>
                    <h3>No review to show!</h3>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Review;
