import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const [revw, setRevw] = useState([]);
  const { user } = useContext(AuthContext);
  useTitle("My Reviews");

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(` https://new-server-seven.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("Review Deleted");
          }
        });
    }
  };

  useEffect(() => {
    fetch(" https://new-server-seven.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setRevw(data);
        console.log(data);
      });
  }, [revw]);

  return (
    <div>
      <h3 className="text-center">My Reviews</h3>
      {user?.uid ? (
        <MDBContainer className="py-5 mr-4">
          <MDBRow className="text-center d-md-flex">
            <MDBCol md="4" className="mb-5 mr-4 mb-md-0 d-md-flex">
              {revw.map((r) =>
                user?.uid === r.uid ? (
                  <div>
                    <MDBCard className="testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#7a81a8" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img
                          src={r.image}
                          className="rounded-circle img-fluid"
                          alt="p"
                        />
                      </div>
                      <MDBCardBody>
                        <h4 className="mb-4">{r.name}</h4>
                        <hr />
                        <p>Item: {r.serviceName}</p>
                        <p className="dark-grey-text mt-4">
                          <MDBIcon fas icon="quote-left" className="pe-2" />
                          {r.description}
                        </p>
                        <Button
                          className="btn-danger"
                          onClick={() => handleDelete(r._id)}
                        >
                          X
                        </Button>
                        &nbsp;
                        {/* <Link to={`/update/${r._id}`}>
                          <Button>Update</Button>
                        </Link> */}
                        <Button>Update</Button>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ) : (
        <p></p>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyReviews;
