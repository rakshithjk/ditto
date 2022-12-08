import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import SectionHeader from "../components/sections/partials/SectionHeader";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <a href="/catalogue">
        <SectionHeader
          data={{
            paragraph: "View all Products",
          }}
          className="center-content view-link"
        />
      </a>
    </>
  );
};

export default Home;
