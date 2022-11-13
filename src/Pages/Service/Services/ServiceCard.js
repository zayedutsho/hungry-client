import React from "react";

const ServiceCard = ({ serve }) => {
  const { serviceName, url, price, name, description } = serve;
  console.log(serve);
  return (
    <div>
      <div class="card">
        <img src={url} class="card-img-top" alt="Fissure in Sandstone" />
        <div class="card-body">
          <h5 class="card-title">{price}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#!" class="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
