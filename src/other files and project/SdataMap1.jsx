import React from 'react';
// import Sdata from './Sdata';
import Card from './Cards1';

const SdataMap1 = (val) => {
    
    return (
        <Card
            img={val.img}
            stitle={val.stitle}
            sname={val.sname}
            link={val.link}
        />
        
    );
}

export default SdataMap1;
