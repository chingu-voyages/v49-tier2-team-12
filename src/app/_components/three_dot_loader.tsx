import React from 'react';

export default function ThreeDotLoader() {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-200"></div>
            </div>
        </div>
    )
};


