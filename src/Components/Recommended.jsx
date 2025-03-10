import React from 'react';

const recommendedItems = [
    { id: 1, name: 'Item 1', description: 'Description for item 1', price: '$10', image: 'https://i.pinimg.com/736x/4d/09/c1/4d09c10ad6646db90c521d8d3e4013a0.jpg' },
    { id: 2, name: 'Item 2', description: 'Description for item 2', price: '$20', image: 'https://i.pinimg.com/736x/4d/09/c1/4d09c10ad6646db90c521d8d3e4013a0.jpg' },
    { id: 3, name: 'Item 3', description: 'Description for item 3', price: '$30', image: 'https://i.pinimg.com/736x/4d/09/c1/4d09c10ad6646db90c521d8d3e4013a0.jpg' },
];

const Recommended = () => {
    return (
        <div className="container mx-auto py-6 px-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Recommended Items</h2>
            <h3 className='mb-4'>Explore our wide Range of products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recommendedItems.map(item => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <p className="text-gray-900 font-bold mb-4">{item.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;