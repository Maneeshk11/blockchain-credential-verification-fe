import Header from '@/components/header/header';
import React, { useEffect } from 'react'; // Import React to use JSX syntax
import { useState } from 'react';

function randomColor() {
    const colors = ['bg-[#FB9999]', 'bg-[#D9D9D9]', 'bg-[#D2C54C]', 'bg-[#D9D9D9]', 'bg-[#49BECE]', 'bg-[#D9D9D9]'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
  
export default function HomePage() {
	const names = ['Simple', 'Aural', 'Effective'];
	var [gheecolor, setGheecolor] = useState(randomColor());
	useEffect(() => {
		const newColor = randomColor();
		setGheecolor(newColor);
	  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>
      <Header titlebro='' />
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <div className="relative w-64">
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-md ${randomColor()} text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
              placeholder="To do:"
            />
          </div>
          <div className="relative w-64 mt-4">
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-md ${randomColor()} text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
              placeholder="To do:"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative w-64">
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-md ${randomColor()} text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
              placeholder="Done:"
            />
          </div>
          <div className="relative w-64 mt-4">
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-md ${randomColor()} text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
              placeholder="Done:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
