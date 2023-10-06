import { Link } from "react-router-dom";

import React from "react";

const Card = ({ home, HouseImage }) => {
  return (
    <div class="max-w-2xl">
      <Link to="/BuyPage">
        <img className="rounded-lg w-auto h-60" src={HouseImage} alt="" />
      </Link>
      <div className="mt-4">
        <h1 className="text-xl text-customBlue font-medium">{home.title}</h1>
        <p className="text-2xl font-bold">{home.price}</p>
        <p className="mt-3">{home.description}</p>
        <p className="text-amber-600 mt-1 pb-2">{home.location}</p>
        <div className="flex items-center">
          <p className="mr-2">Rooms:{home.noOfRooms}</p>
          <p className="mr-2">Bathrooms:{home.noOfBathrooms}</p>
          <p className="mr-2">Toilets:{home.noOfToilets}</p>
        </div>
        <Link
          to="/BuyPage"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-600 cursor-pointer rounded-lg -ml-1 mt-2 "
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
