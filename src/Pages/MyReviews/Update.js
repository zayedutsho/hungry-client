import React, { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {
  const { review } = useLoaderData();
  const [revw, setRevw] = useState(review);

  //   const handleUpdateSubmit = (event) => {
  //     event.preventDefault();
  //     fetch(` https://new-server-seven.vercel.app/review/${review._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(revw),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.modifiedCount > 0) {
  //           alert("Review Updated");
  //           console.log(data);
  //         }
  //       });
  //   };

  //   const handleInputChange = (event) => {
  //     const field = event.target.description;
  //     const value = event.target.value;
  //     const newReview = { ...revw };
  //     newReview[field] = value;
  //     setRevw(newReview);
  //   };

  return (
    <div>
      <h2 className="text-center">Update Review: {review.serviceName}</h2>
      <form>
        <div className="mt-4">
          <div className="text-center">
            <label class="form-label" for="textAreaExample">
              Update
            </label>
          </div>
          <textarea
            // onChange={handleInputChange}
            style={{ height: "100px", width: "400px" }}
            name="description"
            class="form-control"
            id="textAreaExample"
            className="d-flex justify-content-center mx-auto text-center"
            rows="4"
            defaultValue={review.description}
            required
          ></textarea>
          <div className="text-center">
            <input class="btn" type="submit" value="Update" />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Update;
