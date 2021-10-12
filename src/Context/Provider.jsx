import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
	const [number, setNumber] = useState([]);

	const contextValue = {
		number,
		setNumber,
	};

	return (
			<myContext.Provider value={ contextValue }>
					{ children }
			</myContext.Provider>
	);
}

Provider.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.func).isRequired,
};

export default Provider;
