import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import vector from './images/Vector.png';
import vector2 from './images/Vector2.png';
import arrow from './images/arrow.png';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import styles from './styles/my-style.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PropertySearch = () => {
  const propertyMenu = ["Sale", "Rent", "Land"];
  const [location, setLocation] = useState(''); // State for location
  const [pricing, setPricing] = useState(''); // State for pricing
  const [propertyType, setPropertyType] = useState(''); // State for property type

  // Define options for Location dropdown (You can replace these with actual locations)
  const locationOptions = [
    'Lagos', 'Abuja', 'Kano', 'Ibadan', 'Port Harcourt', 'Kaduna', 'Enugu', 'Other',
  ];

  // Define options for Pricing dropdown
  const pricingOptions = [
    'Any', 'Naira 0 - 1,000,000', 'Naira 1,000,000 - 2,000,000', 'Naira 2,000,000 - 3,000,000',
    'Naira 3,000,000 - 5,000,000', 'Above Naira 5,000,000',
  ];

  // Define options for Property Type dropdown
  const propertyTypeOptions = [
    'Any', 'Apartment', 'House', 'Land', 'Commercial', 'Other',
  ];

  const handleSearch = () => {
    // Construct the API URL with the selected criteria
    const apiUrl = `https://real-estate-project-three.vercel.app/search?location=${location}&pricing=${pricing}&propertyType=${propertyType}`;

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the search results state with the API response
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error while fetching search results:', error);
      });
  };

  return (
    <div className={`container ${styles.PScontainer}`}>
      <div className={`row ${styles.ContainerRow}`}>
        <div className="col w-1/2">
          <ul className={styles.listContainer}>
            {propertyMenu &&
              propertyMenu.map((menu, index) => (
                <li key={index} onClick={() => alert(`you clicked ${menu}`)}>
                  {menu}
                </li>
              ))}
          </ul>
        </div>

        <div className="col inputList">
          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select Location</option>
              {locationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Pricing</label>
            <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
              <option value="">Select Pricing</option>
              {pricingOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Property</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Select Property Type</option>
              {propertyTypeOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.searchBtnContainer}>
            <button onClick={handleSearch}>
              <span>Search</span>
              <img src={vector} alt={vector} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePageHero = ({ background }) => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={background}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <PropertySearch />
    </div>
  );
};

const HTitle = ({ text }) => {
  return (
    <div className={`H_title ${styles.titleHead}`}>
      <div>{text}</div>
    </div>
  );
};

// Rest of your code...

export default HomePage;
