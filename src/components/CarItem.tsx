

import { IService } from '@/types';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";

interface CarItemProps {
    car: IService; 
  }
  

const  CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <div className="models-div__box">
      <div className="models-div__box__Image">
        <Image src={car?.images[0]?.filePath} alt="car_Image" width={400} height={300} />
        <div className="models-div__box__descr">
          <div className="models-div__box__descr__name-price">
            <div className="models-div__box__descr__name-price__name">
              <p>{car?.model}</p>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4>${car?.pricePerHour}</h4>
              <p>per day</p>
            </div>
          </div>
          <div className="models-div__box__descr__name-price__details">
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {car?.brand}
            </span>
            <span style={{ textAlign: "right" }}>
              4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {car?.transmission}
            </span>
            <span style={{ textAlign: "right" }}>
              {car?.fuelType} &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
          </div>
          <div className="models-div__box__descr__name-price__btn">
            <Link href={`/book/${car?.id}`}>Book Ride</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
