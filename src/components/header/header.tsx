import React, { FC, useEffect } from 'react'; // Import React to use JSX syntax
import { useState } from 'react';

function createTitle(title) {
  if (title) {
    return "" + title;
  } else {
    return 'Default title';
  }
}

function Headerbro(props) {
  console.log(props.title);
  return <h1>{createTitle(props.title)}</h1>;
}

function randomColor() {
    const colors = ['bg-[#FB9999]', 'bg-[#D9D9D9]', 'bg-[#D2C54C]', 'bg-[#D9D9D9]', 'bg-[#49BECE]', 'bg-[#D9D9D9]'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

interface HeaderProps {
  titlebro : string;
}
  
const Header:FC<HeaderProps> = ({titlebro}) => {
	const names = ['Simple', 'Aural', 'Effective'];
	var [gheecolor, setGheecolor] = useState(randomColor());
	useEffect(() => {
		const newColor = randomColor();
		setGheecolor(newColor);
  }, []);
  
  // useEffects, callBacks
  
  return (
    <div className="flex flex-col items-center">
      <div>
        <Headerbro title="ReMind: A to-do list application." />
        <ul>
          {titlebro}
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
