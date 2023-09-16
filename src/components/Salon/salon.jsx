import React from 'react';
import "./salon.scss"
import SalonPrice from "./SalonPrice/SalonPrice";
import SalonRecom from "./SalonRecom/salonRecom";
import Sultan from "./Sultan/Sultan";
import SalonDor from "./SalonDor/salonDor";

const Salon = () => {
    return (
        <div id='salon'>
            <SalonPrice/>
            <Sultan/>
            <SalonRecom/>
            <SalonDor/>
        </div>
    );
};

export default Salon;