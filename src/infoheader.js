import React, {Component} from 'react'

//Subcomponent import
import Tasks from './tasks.js';
import Talks from './talks.js';

class InfoHeader extends Component {
	render() {
		return (
		<div>
			<Tasks />
			<Talks />
		</div>
	);
	}
}

export default InfoHeader;