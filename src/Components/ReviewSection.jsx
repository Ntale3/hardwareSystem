import { AiFillStar } from "react-icons/ai";
import { useState } from 'react';
const reviews = [
    {
        id: 1,
        name: 'John Doe',
        review: 'Excellent service and high-quality materials. Highly recommend!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Jane Smith',
        review: 'Great customer support and timely delivery.',
        rating: 4,
    },
    {
        id: 3,
        name: 'Bob Johnson',
        review: 'Good prices and reliable products.',
        rating: 4,
    },
    {
        id: 4,
        name: 'Ntale Samad',
        review: 'Good prices and reliable products.',
        rating: 3,
    },
    {
        id: 5,
        name: 'Ariel Wandera',
        review: 'Good prices and reliable products.',
        rating: 4,
    },
    {
        id: 6,
        name: 'Eric Sempijja',
        review: 'Good prices and reliable products.',
        rating: 3.5,
    }
];

const ReviewSection = () => {
    return (
        <div className="p-6 shadow-lg ">
            <div>
                <h1 className="text-center text-3xl text-blue-950">Why you should buy from us</h1>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-blue-950">Reviews</h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                    <div key={review.id} className="mb-4 p-4 bg-white rounded shadow-md">
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <p className="text-gray-600 mb-2">{review.review}</p>
                        <div className="flex items-center">
                            {[...Array(Math.floor(review.rating))].map((_, index) => (
                                <AiFillStar key={index} className="text-yellow-500" />
                            ))}
                            {review.rating % 1 !== 0 && <AiFillStar className="text-yellow-500" style={{ opacity: 0.5 }} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ReviewSection;