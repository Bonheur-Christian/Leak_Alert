import React from "react";
import Bar from "../components/LandingBar";
import Intro from "../components/Intro";
import WhatWeOffer from "../components/What_we_offer";
import Features from "../components/Features";
import Mission from "../components/Mission";
import Contacts from "../components/Contacts";

function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <Bar />
      <Intro />
      <WhatWeOffer />
      <Features />
      <Mission />
      <Contacts />
    </div>
  );
}

export default Home;
