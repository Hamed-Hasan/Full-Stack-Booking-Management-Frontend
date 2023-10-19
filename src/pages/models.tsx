import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImage1 from "../images/cars-big/audi-box.png";
import CarImage2 from "../images/cars-big/golf6-box.png";
import CarImage3 from "../images/cars-big/benz.jpg";
import CarImage4 from "../images/cars-big/bmw-box.png";
import CarImage5 from "../images/cars-big/benz-box.png";
import CarImage6 from "../images/cars-big/passat-box.png";
import Link from "next/link";
import Image from "next/image";
import { useCarServicesQuery, useDeleteCarServiceMutation } from "@/redux/api/carService/carServiceApi";
import { useDebounced } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { IService } from "@/types";




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

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">

{data.map((car, index) => (
              <div key={index} className="models-div__box">
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
