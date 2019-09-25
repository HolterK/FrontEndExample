import React, { Component } from 'react';

class Talks extends Component {
	render() {
    return (
      <div className="talks container">
        <div className="mainHeader"> <h1>SAMTALER</h1> </div>
        <div className="talksWrapper">
          <div>
            <h3 className="subHeader">Gjennomførte:</h3>
            <p className="heavy orange">10</p>
          </div>
          <div className="planned">
            <h3 className="subHeader">Planlagt:</h3>
            <p className="heavy orange">2</p>
          </div>
        </div>
        <div>
          <h3 className="subHeader">Neste:</h3>
            <div className="nextTalk">
              <img src={require('./files/image/defaultUser.jpg')} alt='' />
              <div>
                <h3 className="subHeader">Dominic Berg</h3>
                <p className="smaller">mandag 7.mars</p>
              </div>
            </div>
          </div>
      </div>
    );
	}
}

export default Talks;