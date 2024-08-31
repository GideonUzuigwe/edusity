import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonals from "./components/Testimonals/Testimonals";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title={"our programs"} subTitle="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title={"gallery"} subTitle="Campus Photos" />
        <Campus />
        <Title title={"testmonials"} subTitle="What Student Says" />
        <Testimonals />
        <Title title={"contact us"} subTitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
