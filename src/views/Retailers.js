import React from 'react';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import RetailersContent from '../components/sections/RetailersContent';
import SectionHeader from '../components/sections/partials/SectionHeader';

  const sectionHeader = {
    paragraph: 'Join us in empowering our farming community and ensuring better prices for them',
  };

const Retailers = () =>{
    return <>
    <RetailersContent />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <div className="container">
           <SectionHeader data={sectionHeader} className="center-content"  containerSize="container-l"/>
            <SectionHeader data={{paragraph:"Reach out to us to be a part of the Digital revolution"}} className="center-content"/>
           
      </div>
    </>
}

export default Retailers