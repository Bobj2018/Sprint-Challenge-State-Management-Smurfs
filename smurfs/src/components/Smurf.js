import React from 'react';

function Smurf({ data }) {
	return (
		<li>
			<b>{data.id}</b> - {data.name}
		</li>
	);
}

export default Smurf;
