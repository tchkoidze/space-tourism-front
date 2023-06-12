import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const BACK_URL = import.meta.env.VITE_BACK_URL;

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
  /*const [location, setLocation] = useState("Moon");*/

  useEffect(() => {
    const getDestinationsdata = async () => {
      const response = await axios.get(
        "https://space-tours.herokuapp.com/api/destination"
      );
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
    <div className="flex flex-col items-center h-[100%] bg-[url('./assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-white px-[24px] md:bg-[url('./assets/destination/background-destination-tablet.jpg')] md:px-[39px] lg:px-0 lg:bg-[url('./assets/destination/background-destination-desktop.jpg')]">
      <div className="flex gap-[18px] pt-[88px] font-barlow font-normal text-base/[19px] tracking-[2.7px] uppercase md:text-[20px] md:leading-[24px] md:self-start md:pt-[136px] lg:pt-[212px] lg:pl-[166px] lg:text-[28px] lg:leading[34px] lg:tracking-[4.725px]">
        <span className="text-white/[0.25] ">01</span>
        <h2 className="inline-block">Pick your destination</h2>
      </div>
      <div className="lg:flex lg:pl-[230px] lg:pr-[164px] lg:mt-[64px] lg:gap-[157px]">
        {destination && destination.length > 0 && (
          <>
            <img
              /*src={`${${process.env.Back_url}}${destination[0].images.png}`}*/
              src={`${BACK_URL}${destination[0].images["png"]}`}
              alt="moon"
              className="w-[170px] h-[170px] mt-[32px] mb-[26px] mx-auto md:w-[300px] md:h-[300px] md:my-[55px] lg:hidden"
            />
            <img
              /*src={`${${process.env.Back_url}}${destination[0].images.png}`}*/
              src={`${BACK_URL}${destination[0].images["webp"]}`}
              alt="moon"
              className="hidden lg:inline lg:w-[445px] lg:h-[445px]"
            />
          </>
        )}

        <div className="flex flex-col text-center mb-[57px] md:px-[58px] lg:p-0 lg:text-left">
          <div className="flex gap-4 justify-center md:gap-[36px] lg:justify-start">
            {destinations?.map((d) => {
              return (
                <div key={d.name}>
                  <button
                    className="font-barlow font-normal text-[14px] leading--17px] tracking-[2.36px] uppercase md:text-[16px] md:leading-[19px] md:tracking-[2.7px] "
                    onClick={() => {
                      const newDestination = [...destinations].filter(
                        (name) => name.name === d.name
                      );
                      setDestination(newDestination);

                      console.log(45);
                    }}
                  >
                    {d.name}
                  </button>
                  <div
                    className=" w-[100%] h-[3px] mt-[12px] "
                    style={
                      destination &&
                      destination.length > 0 &&
                      d.name === destination[0].name
                        ? { backgroundColor: "#fff" }
                        : undefined
                    }
                  ></div>
                </div>
              );
            })}
          </div>
          <h2 className="font-bellefair font-normal text-[56px] leading-[64px] uppercase mt-[20px] md:text-[80px] md:leading-[92px] md:mt-[32px] lg:text-[100px] lg:leading-[115px] lg:mt-[37px]">
            {destination && destination.length > 0 && destination[0].name}
          </h2>
          <p className="text-light-blue text-center font-barlow font-normal text-[15px] leading-[25px] mb-[32px] md:text-[16px] md:leading-[28Spx] md:mt-[8px] md:mb-[49px] lg:text-[18px] lg:leading-[32px] lg:mt-[14px] lg:mb-[54px] lg:text-left">
            {destination &&
              destination.length > 0 &&
              destination[0].description}
          </p>
          <div className="flex flex-col items-center pt-[32px] pb-57px] border-t border-[#383B4B] md:flex-row md:gap-[32px] justify-center md:pt-[28px] lg:justify-start">
            <div>
              <span className="font-barlow font-normal text-light-blue text-[14px] leading--17px] tracking-[2.36px]">
                AVG. DISTANCE
              </span>
              <p className="font-bellefair font-normal text-[32px] leading-8 uppercase  mt-3">
                {destination &&
                  destination.length > 0 &&
                  destination[0].distance}
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

/* src={`${${process.env.Back_url}}${destination[0].images.png}`} */
