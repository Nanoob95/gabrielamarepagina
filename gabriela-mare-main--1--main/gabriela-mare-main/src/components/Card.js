import React from 'react';
import { IoRestaurantOutline } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { IoTvOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import Link from 'next/link';

const Card = ({ image, title, description, person, bed, bath, wifi, kitchen, tv, parking,enlace }) => {
  return (
    <div className="max-w-sm rounded mb-10 overflow-hidden shadow-lg bg-white-100">
      <img className="w-full" src={image} alt={title} style={{ height: '350px', width:"350px" }} />
      <div className="px-6 py-4">
        <div className="font-medium mb-6 mt-6  text-indigo-600 text-xl">{title}</div>
    
        <div className="border-2 border-black rounded-lg p-4 mb-4">
          <div className="flex flex-col items-start justify-start md:gap-5 gap-5 text-sm">
            <div className="flex items-center justify-start gap-1 font-normal">
              <IoPersonOutline />
              {person}
            </div>
            <div className="flex items-center justify-start gap-1 font-normal">
              <IoBedOutline />
              {bed}
            </div>
            <div className="flex items-center justify-center gap-1 font-normal">
              <FaBath />
              {bath}
            </div>
            <div className="flex items-center justify-center gap-1 font-normal">
              <IoWifi />
              {wifi}
            </div>
            <div className="flex items-center justify-center gap-1 font-normal">
              <IoRestaurantOutline />
              {kitchen}
            </div>
            <div className="flex items-center justify-center gap-1 font-normal">
              <IoTvOutline />
              {tv}
            </div>
            <div className="flex items-center justify-center gap-1 font-normal">
              <IoCarOutline />
              {parking} 
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-2 pb-2">
      <Link href={"/casa-del-alto"}>
        <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Ver más
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;