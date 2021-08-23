import React from 'react';
import './Bmw.css';
import image from './images/11_176_s.png';
import image1 from './images/12_176_s.png';
import image2 from './images/15_176_s.png';
import image3 from './images/16_176_s.png';
import image4 from './images/18_176_s.jpg';
import image5 from './images/19_176_s.jpg';
import image6 from './images/20_176_s.jpg';

const Bmw = () => {
    return (
        <div>
            <p>BMW CONCEPT I4</p>
            <img src={image} alt="" className="Upper1"/>
            <img src={image1} alt="" className="Upper2"/>
            <h3>The BMW Concept i4, BMWs first all-electric Gran Coupé</h3>
            <p>BMW is expanding its all electric i range with the BMW Concept i4, representing BMWs first all-electric
                Gran Coupé.</p>
            <p>Expected to enter production in 2021, the BMW concept i4 will feature 5th Generation eDrive technology
                and have an all-electric range of up to 372 miles. This concept is a true preview of the BMW i4, BMWs
                first all electric premium midsized vehicle.</p>
            <p>On the outside, the BMW Concept i4 has been designed to catch your eye. You’ll notice the large
                closed-off double kidney grille, two freestanding LED elements on either side and the exclusively styled
                wheels offering enhanced aerodynamics.</p>
            <img src={image4} alt="" className="Middle"/>
            <img src={image5} alt="" className="Middle"/>
            <img src={image6} alt="" className="Middle"/>
            <p>BMW CONCEPT I4</p>
            <img src={image2} alt="" className="Down1"/>
            <img src={image3} alt="" className="Down2"/>
            <p>Thanks to the new 5th Generation eDrive technology, the BMW Concept i4 achieves up to 530hp (390 kW),
                which is the same as a V8 power unit in current BMW models. It can also accelerate from zero to 62mph in
                just four seconds!</p>
            <p>Inside, innovation meets minimalism with modern yet luxurious ambience and features such as gold-bronze
                blending to chrome surfaces, controls finished in glass crystal and the new curved display which has
                been ergonomically optimised and will be included in the future production of the BMW i4.</p>

        </div>
    );
};

export default Bmw;