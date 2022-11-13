import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../../hooks/useTitle";

const AddServices = () => {
  const notify = () => toast("Service Added Successfully!");
  useTitle("Add Meal");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      service: __dirname,
      serviceName: name,
      url: url,
      ratings: ratings,
      price: price,
      description: description,
    };

    fetch(" https://new-server-seven.vercel.app/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Added");
          // alert("Items Added");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Add Meals</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label class="form-label" for="typeText">
                Add Items
              </label>
              <input
                name="name"
                type="text"
                id="typeText"
                class="form-control"
                required
              />
              <div>
                <label class="form-label" for="typeURL">
                  Image URL
                </label>
                <input
                  name="url"
                  type="url"
                  id="typeURL"
                  class="form-control"
                  required
                />
              </div>
              <div>
                <label class="form-label" for="typeNumber">
                  Ratings
                </label>
                <input
                  name="ratings"
                  type="text"
                  id="typeNumber"
                  class="form-control"
                />
              </div>
              <div>
                <label class="form-label" for="typeNumber">
                  Price
                </label>
                <input
                  name="price"
                  type="number"
                  id="typeNumber"
                  class="form-control"
                  required
                />
              </div>
              <div>
                <label class="form-label" for="textAreaExample">
                  Description
                </label>
                <textarea
                  name="description"
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  required
                ></textarea>
                <input class="btn" type="submit" value="Add" />
              </div>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddServices;
