import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;