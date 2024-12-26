import CardsTheorieInfo from "@/components/CardsTheorieInfo";
import Footer from "@/components/Footer";
import Geslaagden from "@/components/Geslaagden";
import Header from "@/components/header";
import InfoTheorie from "@/components/InfoTheorie";
import PakketTheorie from "@/components/PakketTheorie";
import React from "react";

const Theorie = () => {
  return (
    <div>
      <Header />
      <PakketTheorie />
      <CardsTheorieInfo />
      <InfoTheorie />
      <Geslaagden />
      <Footer />
    </div>
  );
};

export default Theorie;
