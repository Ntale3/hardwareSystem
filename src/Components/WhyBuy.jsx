import React from 'react';
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdHighQuality } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiGreatPyramid } from "react-icons/gi";
const WhyBuy = () => {
    return (
        <div className="bg-gray-100 p-6 md:p-12 m-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Buy From BuildDirect?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <HiOutlineLightBulb className="w-16 h-16 mb-4" size={30} />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Years of Experience</h3>
                        <p className="text-gray-600 text-center">
                            With over 20 years in the building industry, we have the expertise and knowledge to provide you with the best products and services.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdHighQuality  className="w-16 h-16 mb-4" size={30} />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Quality Products</h3>
                        <p className="text-gray-600 text-center">
                            We offer a wide range of high-quality building materials that meet industry standards and exceed customer expectations.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHandsHelping className="w-16 h-16 mb-4" size={30} />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Exceptional Customer Service</h3>
                        <p className="text-gray-600 text-center">
                            Our dedicated customer service team is here to assist you with any questions or concerns you may have, ensuring a smooth buying experience.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <GiGreatPyramid className="w-16 h-16 mb-4" size={30} />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Great Value</h3>
                        <p className="text-gray-600 text-center">
                            We offer competitive pricing on all our products, providing you with the best value for your money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBuy;