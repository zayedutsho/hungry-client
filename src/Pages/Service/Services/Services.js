import React, { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../../hooks/useTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("Meals");
  useEffect(() => {
    fetch(" https://new-server-seven.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  // const { data } = useLoaderData();
  // console.log(data);

  return (
    <div>
      <h1 className="text-center">All Meal Items</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-7">
          <PhotoProvider>
            {services.map((serve) => (
              // <ServiceCard>
              //   key={serve._id}
              //   serve={serve}
              // </ServiceCard>
              <div className="col">
                <div class="card">
                  <PhotoView src={serve.url}>
                    <img
                      src={serve.url}
                      class="card-img-top"
                      alt="Fissure in Sandstone"
                      style={{ height: 300 }}
                    />
                  </PhotoView>
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
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default Services;
