import React, { useContext } from 'react';
import myContext from '../Context/myContext';

function Numbers() {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const { number, setNumber } = useContext(myContext);

	const handleClick = ({ target: { value } }) => {
		setNumber(number.concat(value));
	}

	return (
			numbers.map((number) => (
				<button
					key={ number }
					type="button"
					value={ number }
					onClick={ handleClick }
				>
					{ number }
				</button>
			))
	);
}

export default Numbers;
