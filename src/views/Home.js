import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import SectionHeader from '../components/sections/partials/SectionHeader';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />

<SectionHeader data={{paragraph:"Reach out to us to be a part of the Digital revolution"}} className="center-content"/>
    </>
  );
}

export default Home;