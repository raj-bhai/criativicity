// import React from "react";
// import Image from "next/image";
// import City_ from '../assets/city.png'


// const City = () => {
//     return (
//         <div>
//             <Image src={City_} alt="city" className="aspect-4/4 w-full"></Image>
//         </div>
//     )
// }

// export default City;

import { useEffect, useRef } from "react";
import Image from "next/image";
import City_ from '../assets/city.png'
import { motion } from "framer-motion";

const CityComponent = () => {
    const canvasRef = useRef(null);

    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
                <Image src={City_} alt="city" className="aspect-4/4 w-full"></Image>
            </motion.div>
        </div>
    );
};

export default CityComponent;
