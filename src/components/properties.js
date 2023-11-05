import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Use an asynchronous function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ienergyup-ecommerce.onrender.com/api/v1/properties"
        );
        console.log(response);
        // Assuming the response data is an array of properties
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <Header />
      <h1>Property List</h1>
      <ul>
        {/* Map over the properties array and render each property */}
        {(property) => (
          <li key={property.id}>
            <h2>{property.name}</h2>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
            {/* Add more property details as needed */}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Properties;
