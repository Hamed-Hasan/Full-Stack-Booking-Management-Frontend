import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImage1 from "../images/cars-big/audi-box.png";
import CarImage2 from "../images/cars-big/golf6-box.png";
import CarImage3 from "../images/cars-big/benz.jpg";
import CarImage4 from "../images/cars-big/bmw-box.png";
import CarImage5 from "../images/cars-big/benz-box.png";
import CarImage6 from "../images/cars-big/passat-box.png";

import Image from "next/image";
import { useCarServicesQuery, useDeleteCarServiceMutation } from "@/redux/api/carService/carServiceApi";
import { useDebounced } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { IService } from "@/types";
import Loading from "@/components/Loading";
import CarItem from "@/components/CarItem";




function Models() {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteCarService] = useDeleteCarServiceMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  
  const [data, setData] = useState<IService[]>([]); 
  const { data: carServices, error, isLoading } = useCarServicesQuery({ ...query });

  useEffect(() => {
    if (carServices) {
      setData(carServices.carServices);
    }
  }, [carServices]);

if(isLoading){
  return <Loading/>
}

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
        <div className="models-div">
            {data.map((car, index) => (
              <CarItem key={index} car={car} />
            ))}
          </div>

          
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in hrefuch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
