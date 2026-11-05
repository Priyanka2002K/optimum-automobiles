import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import OurWork from "../pages/OurWork";
import Contact from "../pages/Contact";
import Estimate from "../pages/Estimate";
import Inventory from "../pages/Inventory";
import BuyUsedCars from "../pages/BuyUsedCars";
import SellYourCar from "../pages/SellYourCar";
import OwnershipTransfer from "../pages/OwnershipTransfer";
import CarFinance from "../pages/CarFinance";
import InsuranceAssistance from "../pages/InsuranceAssistance";
import ExtendedWarranty from "../pages/ExtendedWarranty";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/estimate" element={<Estimate />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/buy-used-cars" element={<BuyUsedCars />} />
      <Route path="/sell-your-car" element={<SellYourCar />} />
      <Route path="/ownership-transfer" element={<OwnershipTransfer />}/>
      <Route path="/car-finance" element={<CarFinance />} />
      <Route path="/insurance-assistance" element={<InsuranceAssistance />}/>
      <Route path="/extended-warranty" element={<ExtendedWarranty />}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;