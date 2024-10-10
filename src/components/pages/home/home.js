// App.js
import React from "react";
import './home.css';
import Reveal from "../../atoms/text-reveal";
import ParallaxImage from "../../atoms/parralax-image";
import Gallery from "../../molecules/gallery/gallery";

function Home() {
  return (<main className="home">
    <section className="section-one">
      <Gallery/>
    </section>
  </main>);
}

export default Home;