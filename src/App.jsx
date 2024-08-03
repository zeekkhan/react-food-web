import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ExploreFood from "./components/ExploreFood";
import FoodMenu from "./components/FoodMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />
      <SearchBar />
      <ExploreFood />
      <FoodMenu />
      <Footer />

    </div>
  );
}

export default App;
