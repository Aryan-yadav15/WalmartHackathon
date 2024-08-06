import Image from 'next/image';
import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="flex justify-center p-4">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden w-64 h-[25rem]">
                <div className="relative w-full h-48">
                    <Image
                        src={data.imageUrl}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                        alt={data.name}
                    />
                    <div className="absolute bottom-2 left-2 ">
                        <div className="bg-white rounded-full flex flex-row  items-end px-2">
                            <span className="text-yellow-400 mr-1">⭐</span>
                            <p className="text-sm font-semibold text-gray-600 mr-1">{data.rating}</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800 truncate">{data.name}</h1>
                        <p className="text-sm text-gray-500 mt-1">{data.description}</p>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-lg font-bold text-gray-600 mt-2">{data.price} USD</p>
                            {data.discount && (
                                <p className="text-sm text-red-500 mt-2 font-semibold">({data.discount}% off)</p>
                            )}
                        </div>
                        <div className="mt-2 ">
                            <button className="bg-gray-800 w-full text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-500">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
