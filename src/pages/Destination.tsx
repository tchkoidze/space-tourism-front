import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Destination {
  description: string;
  distance: string;
  images: { png: string; webp: string };
  name: string;
  travel: string;
  _id: string;
}

function Destination() {
  const [destinations, setDestinations] = useState<Destination[] | null>([]);

  const [destination, setDestination] = useState<Destination[] | null>([]);
  //const [destinationName, setDestinationName] = useState<string>("Moon");

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
  }, []);
  console.log(destinations);
  console.log(destination);
  //console.log(destination?.images.webp);
  return (
    <div className="h-[100%] bg-[url('./assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-white">
      <div className="flex gap-[18px] pt-[88px]">
        <span className="text-white/[0.25]">01</span>
        <h2 className="inline-block">Pick your destination</h2>
      </div>
      {destination && destination.length > 0 && (
        <img
          src={destination[0].images.png}
          alt="moon"
          className="w-[170px] h-[170px]"
        />
      )}
      <div className="flex flex-col text-center py-[24px]">
        <div className="flex gap-4">
          {destinations?.map((d) => {
            return <Link to={"/" + d.name}>{d.name}</Link>;
          })}
        </div>
        <h2 className="mt-[20px]">{destination[0].name}</h2>
        <p className="mb-[32px]">{destination[0].description}</p>
        <div className="flex flex-col items-center pt-[32px] pb-57px]">
          <div>
            <span>AVG. DISTANCE</span>
            <p>{destination[0].distance}</p>
          </div>
          <div>
            <span>Est. travel time</span>
            <p>{destination[0].travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
