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
            <select placeholder="set location">
              <option value="option1"> Select Location</option>
            </select>
          </div>

          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Pricing</label>
            <select placeholder="set location">
              <option value="option1">Select Pricing</option>
            </select>
          </div>

          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Property</label>
            <select placeholder="set location">
              <option value="option1">Select Property Type</option>
            </select>
          </div>

          <div className={styles.searchBtnContainer}>
            <button>
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
