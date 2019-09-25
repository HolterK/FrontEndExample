import React, {Component} from 'react'

//Subcomponent import
import Employee from './employee.js';
import ProgressCircle from './progresscircle.js';

//Data import
import PersonsData from './data/persons.json';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.detailViewer = this.detailViewer.bind(this);
    this.state = {
      detailView: 0,
      currentEmployee: ''
    }
  }

  clickHandler() {
    this.setState({ detailView: 0})
  }

  detailViewer(person, e) {
    this.setState({
      detailView: 1,
      currentEmployee: person
    })
  }

  render() {
    const mailSuffix = "@mail.com";
    const phoneNumber = "99999999";
    const employees = (
      <div >
        <div className="mainHeader">
          <h1> Ansatte</h1>
        </div>
        {PersonsData.persons.map((persons, index) => {
          return (
              <div key={index} className="employeeContainer" onClick={this.detailViewer.bind(this, persons.person.pid)} >
              <ProgressCircle
                size="small"
                complete={persons.person.statistics.requirements_passed}
                notDue={persons.person.statistics.requirements_not_due}
                incomplete={persons.person.statistics.requirements_missing}
                total={persons.person.statistics.requirements_total}
                image="1"
              >
                <img className="innerCircle" src={persons.person.image ? require('.'+persons.person.image+'.png') : require('./files/image/defaultUser.jpg')} alt='' />
              </ ProgressCircle>
              <div className="employeeInfo">   
                <p>
                  <span className="strong larger">{persons.person.fullname}</span>
                  <br />
                          <span className="grey">{(`${persons.person.firstname}.${persons.person.lastname}${mailSuffix}`).toLowerCase()} / {phoneNumber}</span>
                </p>
              </div>
              <div className="employeeNext">
                <p>
                    <span className="grey">Neste samtale</span>
                    <br />
                    <span className="heavy">-</span>
                </p>
              </div>
              <div className="employeeTasks">
                      {persons.person.statistics.requirements_missing ? (<div><p><span className="grey">Oppgaver</span> <br />< span className="heavy"> {persons.person.statistics.requirements_missing}</span></p></div>) : ''}
              </div>
              </div>
          );
        })}
      </div>
    )
    return (
        <div className="employees">
        {!this.state.detailView ? employees : (<Employee employee={this.state.currentEmployee} clickHandler={this.clickHandler}><img src={require('./files/image/defaultUser.jpg')} alt="" /> </Employee>)}
			</div>
		);
	}
}

export default Employees;