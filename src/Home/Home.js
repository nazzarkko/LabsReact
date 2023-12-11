import React from "react";
import "../Home/Home.css";
import Home_h from "./Components_Home/titleForHome";
import ListOfAircrafts from "./Components_Home/Catalog/CatalogComponents/ListOfAircrafts/ListOfAircrafts";
const Home = () =>{
    return(
        <div className="homeContainer">
           <Home_h/>
            <ListOfAircrafts/>
        </div>
    )
}
export default Home;