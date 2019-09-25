import React, { Component } from 'react'

//Data import
import PersonData from './data/person.json';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.menuClickHandler = this.menuClickHandler.bind(this);
        this.state = {
            currentTab: "tasks"
        }
    }
    menuClickHandler(e) {
        this.setState({ currentTab: e.target.id });
    }

    render() {
      const image = this.props.children;
      const personId = this.props.employee;
        const employee = (
            <div>
                <div className="employeeContainer" onClick={this.props.clickHandler} >
                  <div>
                    {image}
                  </div>
                  <div className="mainHeader">
                    <h1 className="employeeInfo">{(`${PersonData.person.firstname} ${PersonData.person.lastname}`).toUpperCase()}</h1>
                  </div>
                </div>
                <div className="menu">
                  <span className={(this.state.currentTab === "user") ? "active" : ""} id="user" onClick={this.menuClickHandler} > Bruker</span>
                  <span className={(this.state.currentTab === "tasks") ? "active" : ""} id="tasks" onClick={this.menuClickHandler}>Oppgaver</span>
                  <span className={(this.state.currentTab === "message") ? "active" : ""} id="message" onClick={this.menuClickHandler}>Send melding</span>
                  <span className={(this.state.currentTab === "courses") ? "active" : ""} id="courses" onClick={this.menuClickHandler}>{'Meld p\u00e5 kurs'}</span>
                </div>
                <div className={"container user " + (this.state.currentTab !== "user" ? "hidden" : "")}>
                  <p>
                    <span className="strong">Epost:</span><span> {PersonData.person.email}</span>
                    <br />
                    <br />
                    <span className="strong">Epost:</span> <span>{PersonData.person.email2}</span>
                    <br />
                    <br />
                    <span className="strong">Mobil:</span><span>{PersonData.person.mobile}</span>
                  </p>
                </div>
                <div className={(this.state.currentTab !== "tasks" ? "hidden" : "")}>
                  {PersonData.now.map((task, index) => {
                          return (
                              <div key={index} className="taskContainer">
                        <p><span className={(task.passed ? "orange" : "grey") + " date"}>{task.date}</span>
                          <br />
                          <span className="task strong larger">{task.competance.course}</span>
                          <br />
                          <span>{task.competance.coursetypename}</span>
                            </p>
                            <i className="material-icons icons">edit</i>
                      </div>
                    );
                  })}
                  <button className="addTask">Legg til oppgave</button>
                </div>
                <div className={"missingContainer " + (this.state.currentTab !== "message" ? "hidden" : "")}>
                  <span className="strong">Ikke implementert</span>
                </div>
                <div className={"missingContainer " + (this.state.currentTab !== "courses" ? "hidden" : "")}>
                  <span className="strong">Ikke implementert</span>
                </div>
          </div>);
      const noEmployee = (
        <div className="missingContainer" onClick={this.props.clickHandler}><p className="strong">Ingen data for denne brukeren</p></div>
      )
      return (
        <div>
          {(personId === 7525) ? employee : noEmployee}
        </div>
     )
	}
}

export default Employee;