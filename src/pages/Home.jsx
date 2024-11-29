import React from "react";
import Bar from "../components/LandingBar";
import Intro from "../components/Intro";
import WhatWeOffer from "../components/What_we_offer";
import Features from "../components/Features";

function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <Bar />
      <Intro />
      <WhatWeOffer />
      <Features />
    </div>
  );
}

export default Home;
