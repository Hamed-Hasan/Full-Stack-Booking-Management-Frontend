import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useCarServicesQuery, useDeleteCarServiceMutation } from "@/redux/api/carService/carServiceApi";
import { useDebounced } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { IService } from "@/types";
import Loading from "@/components/Loading";
import CarItem from "@/components/CarItem";
import SearchBar from "@/components/SearchBar";




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

        <div className="max-w-2xl mx-auto">


</div>
<SearchBar/>

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
