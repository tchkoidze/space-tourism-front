import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Destination {
  description: string;
  distance: string;
  images: { png: string; webp: string };
  name: string;
  travel: string;
  _id?: string;
}

function Destination() {
  const [destinations, setDestinations] = useState<Destination[] | null>([]);

  const [destination, setDestination] = useState<Destination[] | null>([]);

  useEffect(() => {
    const getDestinationsdata = async () => {
      const response = await axios.get("http://localhost:3333/api/destination");
      setDestinations(response.data);
      console.log(destinations);
      const destinationData = await response.data.filter(
        (x: Destination) => x.name === "Moon"
      );
      setDestination(destinationData);
    };
    getDestinationsdata();
  }, []);
  console.log(destinations);
  console.log(destination);
  //console.log(destination?.images.webp);
  return (
    <div className="flex flex-col items-center h-[100%] bg-[url('./assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-white px-[24px]">
      <div className="flex gap-[18px] pt-[88px] font-barlow font-normal text-base/[19px] tracking-[2.7px]">
        <span className="text-white/[0.25] ">01</span>
        <h2 className="inline-block">Pick your destination</h2>
      </div>
      {destination && destination.length > 0 && (
        <img
          src={destination[0].images.webp}
          alt="moon"
          className="w-[170px] h-[170px] mt-[32px] mb-[26px]"
        />
      )}
      <div className="flex flex-col text-center mb-[57px]">
        <div className="flex gap-4 justify-center">
          {destinations?.map((d) => {
            return (
              <button
                className="font-barlow font-normal text-[14px] leading--17px] tracking-[2.36px] uppercase"
                key={d.name}
                onClick={() => {
                  const newDestination = [...destinations].filter(
                    (name) => name.name === d.name
                  );
                  setDestination(newDestination);
                  console.log(newDestination);
                }}
              >
                {d.name}
              </button>
            );
          })}
        </div>
        <h2 className="font-bellefair font-normal text-[56px] leading-[64px] uppercase mt-[20px]">
          {destination && destination.length > 0 && destination[0].name}
        </h2>
        <p className="text-light-blue text-center font-barlow font-normal text-[15px] leading-[25px] mb-[32px]">
          {destination && destination.length > 0 && destination[0].description}
        </p>
        <div className="flex flex-col items-center pt-[32px] pb-57px] border-t border-[#383B4B]">
          <div>
            <span className="font-barlow font-normal text-light-blue text-[14px] leading--17px] tracking-[2.36px]">
              AVG. DISTANCE
            </span>
            <p className="font-bellefair font-normal text-[32px] leading-8 uppercase  mt-3">
              {destination && destination.length > 0 && destination[0].distance}
            </p>
          </div>
          <div>
            <span className="font-barlow font-normal text-light-blue text-[14px] leading--17px] tracking-[2.36px] uppercase">
              Est. travel time
            </span>
            <p className="font-bellefair font-normal text-[32px] leading-8 uppercase  mt-3">
              {destination && destination.length > 0 && destination[0].travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;

/*const getDestination = async () => {
      const destinationdata = await destinations?.filter(
        (x: Destination) => x.name === "Moon"
      );
      setDestination(destinationdata);
    };*/

/*const getDestination = async () => {
      const destinationData = destinations?.filter(
        (x: Destination) => x.name === "Moon"
      );
      setDestination(destinationData ? destinationData[0] : null);
    };
    getDestination();*/
