import React, { useState } from "react";
import "../../Catalog.css";
import F16 from "../../ImagesForCarts/F16.png";
import IL76 from "../../ImagesForCarts/IL.png";
import SU27 from "../../ImagesForCarts/SU.png";
import MIG29 from "../../ImagesForCarts/MIG29.png";
import Item from "../Item";

const ListOfAircrafts = () => {
  const initialAircraftCount = 4;
  const [visibleAircraftCount, setVisibleAircraftCount] = useState(
    initialAircraftCount
  );
  
  const showMoreAircrafts = () => {
    setVisibleAircraftCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <div className="ListOfAircrafts">
        {aircrafts.slice(0, visibleAircraftCount).map((aircraft, index) => (
          <Item
            key={index}
            image={aircraft.image}
            model={aircraft.model}
            price={aircraft.price}
            description={aircraft.description}
          />
        ))}
      </div>
      <button className="AircraftButton" onClick={showMoreAircrafts}>
        VIEW MORE
      </button>
    </div>
  );
};
export const aircrafts = [
  {id:1,  image: F16, model: "F16", price: 34, description: "Ukraine received a batch of F-16 aircraft from the United States as military aid. These aircraft serve in the Ukrainian Air Force and are used to enhance combat readiness and protect the airspace." },
  {id:2, image: IL76, model: "IL", price: 30, description: "Ukraine also has its own fleet of IL-76 aircraft used for military and humanitarian missions. These aircraft play a crucial role in cargo transportation and military deployments." },
  {id:3, image: MIG29, model: "MIG29", price: 20, description: "Ukraine also possesses MiG-29 aircraft in its arsenal. These fighter aircraft are utilized to ensure the safety of Ukrainian airspace and perform various duties." },
  {id:4, image: SU27, model: "SU", price: 27, description: "Ukraine inherited several Su-27 aircraft from the former Soviet Union after gaining independence. These fighter aircraft remain part of the Ukrainian aviation and are used for air defense and various missions."},
  {id:5,  image: F16, model: "F16", price: 34, description: "Ukraine received a batch of F-16 aircraft from the United States as military aid. These aircraft serve in the Ukrainian Air Force and are used to enhance combat readiness and protect the airspace." },
  {id:6, image: IL76, model: "IL", price: 30, description: "Ukraine also has its own fleet of IL-76 aircraft used for military and humanitarian missions. These aircraft play a crucial role in cargo transportation and military deployments." },
  {id:7, image: MIG29, model: "MIG29", price: 20, description: "Ukraine also possesses MiG-29 aircraft in its arsenal. These fighter aircraft are utilized to ensure the safety of Ukrainian airspace and perform various duties." },
  {id:8, image: SU27, model: "SU", price: 27, description: "Ukraine inherited several Su-27 aircraft from the former Soviet Union after gaining independence. These fighter aircraft remain part of the Ukrainian aviation and are used for air defense and various missions."}
];
export default ListOfAircrafts;
