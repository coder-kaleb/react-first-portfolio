import React from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Testmonials from "./components/testmonials/Testmonial";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
