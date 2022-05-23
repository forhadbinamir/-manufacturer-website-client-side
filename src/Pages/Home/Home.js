import React from 'react';
import Banner from './Banner';
import Capabilities from './Capabilities';
import Contact from './Contact';
import CoreIndustries from './CoreIndustries';
import HowWeWork from './HowWeWork';
import OurProductions from './OurProductions';

const Home = () => {
    return (
        <div>
            <Banner />
            <CoreIndustries />
            <OurProductions />
            <HowWeWork />
            <Capabilities />
            <Contact />
        </div>
    );
};

export default Home;