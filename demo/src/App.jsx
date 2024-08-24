import Navbar from "./Header/navbar.jsx";

import "./App.css";
import Hero from "./Hero/Hero.jsx";
import Company from "./Company/CompanyPage.jsx";
import Service from "./Services/Service.jsx";
import SoldByDealer from "./SoldByDealer/SoldBYDealer.jsx";
import Payment from "./Payment/Payment.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <div className="container-flued  ">
          <Navbar />
          <Hero />
          <Company />
          <Service />
          <SoldByDealer />
          <Payment />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
