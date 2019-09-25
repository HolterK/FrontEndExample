import React, { Component } from 'react'

//Component imports
import ProgressCircle from './progresscircle';

class Tasks extends Component {
	render() {
    return (
        <div className="container tasks">
            <div className="mainHeader"> <h1>OPPGAVER</h1></div>
            <div className="wheels">
                <div className="wheelWrapper">
                  <ProgressCircle size="large" complete="5" notDue="0" incomplete="10" total="15"/>
                  <p className="grey wheelCaption">Mine</p>
                </div>
                <div className="wheelWrapper">
                    <ProgressCircle size="large" complete="5" notDue="5" incomplete="0" total="10"/>
                  <p className="grey wheelCaption">Ansattes</p>
                </div>
            </div>
      </div>
    );
	}
}

export default Tasks;