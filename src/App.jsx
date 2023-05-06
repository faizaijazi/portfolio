import logo from "./logo.svg";
import "./App.css";
import { Header } from "./component/Header.jsx";
import { Slider } from "./component/Slider";
import { BrowseCars } from "./component/BrowseCars";
import {Destination} from "./component/Destination"
import {Travelogues} from "./component/Travelogues.jsx"

function App() {
  
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="background"></div>

      <div className="main_heading">
        <span className="bigHeading">Find your drive</span>
        <h2 className="innerHeading">Explore the world's largest car sharing marketplace</h2>
      </div>

    <Slider />

    <BrowseCars />

    <Destination />

    <div className="main_heading">
      <h1 className="fuel">Fuel your daydreams</h1>
      <p>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</p>
      <button className="carbtn">Explore Travelogues</button>
    </div>

    <Travelogues />
    </>
  );
}

export default App;
