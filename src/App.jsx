import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import ResultChart from "./Components/ResultChart/ResultChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg "></span>
          }
        >
          <PriceOptions pricingPromise={pricingPromise}></PriceOptions>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
