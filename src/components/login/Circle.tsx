import React, { useState } from 'react';

interface CircleWithTickProps {
	className?: string;
	size?: number;
}

const CircleWithTick: React.FC<CircleWithTickProps> = ({ className, size = 24 }) => {
	const radius = size / 2;
	const tickSize = radius * 0.5;

	const [showTick, setShowTick] = useState(true);

	const handleClick = () => {
		if (showTick == true) {
			setShowTick(false);
		} else {
			setShowTick(true);
		}
	};

	return (
		<svg
			className={`${className}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${size} ${size}`}
			onClick={handleClick} // Add onClick event handler to the SVG
		>
			<defs>
				<linearGradient id="circleGradient" gradientTransform="rotate(90)">
					<stop offset="0%" stopColor="#8CACFF" />
					<stop offset="100%" stopColor="#7D5DFF" />
				</linearGradient>
			</defs>
			<circle
				cx={radius}
				cy={radius}
				r={radius - 2}
				fill="url(#circleGradient)"
			/>
			{showTick && ( // Render the <path> element only if showTick is true
				<path
					d={`M${radius - tickSize + 1} ${radius} l${tickSize / 2} ${
						tickSize / 2
					} ${tickSize - 0.5} -${tickSize - 0.}`}
					stroke="white"
					strokeWidth={0.5}
					fill="none"
				/>
			)}
		</svg>
	);
};

export default CircleWithTick;
