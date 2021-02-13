import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//with JSX

// const element = <h1 className="textClass">Welcome to react programining...</h1>;

// ReactDOM.render(element, document.getElementById('root'));

// *******************************************************************************************
// render more than two element in one container

// const element = (
//   <div className="textClass">
//     <h1>Welcome to react programming</h1>
//     <h1>understanding the elements....</h1>
//   </div>
// );

// ReactDOM.render(element, document.getElementById('root'))

// ************************************************************************************



// without JSX

// const element = React.createElement('h1', null, "Welcome to react programining");

// ReactDOM.render(element, document.getElementById('root'));

// const element = React.createElement("div", {className: 'textClass'}, 

// React.createElement('h1', null, "Welcome to react programining"),
// React.createElement('h1', null, "understanding the elements...."));

// ReactDOM.render(element, document.getElementById('root'));



// *********************************************************************************
//react function component 

// var DisplayEmployeeComponent = (employee) => {
//   return <div className="textClass">
//     <h1>Employee Details</h1>
//     <p>
//       <label>Employee ID: <b>{employee.id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name: <b>{employee.name}</b></label>
//     </p>
//     <DepartmentDetails name={employee.deptName}></DepartmentDetails>
//   </div>
// }

// var DepartmentDetails = (depInfo) => {
//   return <div>
//     <p>
//       <label>Department Name: <b>{depInfo.name}</b></label>
//     </p>
//   </div>;
// }

// const element = <DisplayEmployeeComponent id="51772545" name="saravana" deptName="BCA"></DisplayEmployeeComponent>

// ReactDOM.render(element, document.getElementById('root'))


// *******************************************************************************************************************************

// react class component

// class Employee extends React.Component {
//   constructor(props){
//     super(props);
//     console.log(this.props)
//   }
//   render() {    
//     return <div>
//       <p><label>Employee Id: <b>{this.props.id}</b></label></p>
//       <p><label>Employee Id: <b>{this.props.name}</b></label></p>
//       <Department departname={this.props.departname}></Department>
//     </div>
//   }
// }

// class Department extends React.Component {
//   render() {
//     return <div>
//       <p><label>Employee Department: <b>{this.props.departname}</b></label></p>
//     </div>
//   }
// }

// const element = <Employee id="51772545" name="saravana" departname="BCA"></Employee>

// ReactDOM.render(element, document.getElementById('root'));

// ********************************************************************************************************************


//  state in react

class CountCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onMessageChange(value){
    this.setState(
      {
        message: `Message has ${value.length} length`
      }
    )
  }
  render(){
    return <div>
      <h1>Welcome to count character...</h1>
      <p><label><input type="text" onChange={e=> this.onMessageChange(e.target.value)}></input></label></p>
      <p><label>{this.state.message}</label></p>
    </div>
  }
}

class Employee extends React.Component {
  state = {counter: 0}
  // counter = 0
  addEmployee = ()=>{
    this.setState({counter: this.state.counter + 1});
    // this.counter = this.counter + 1;
    // alert("Employee Added");
    // alert(this.counter);
  }
  render(){
    return <div>
      <h2> Welcome to Employee component</h2>
      <p>Counter clicked {this.state.counter} Times</p>
      <p>
        <button onClick={this.addEmployee}>Add Employee</button>
      </p>
    </div>
  }
}

// const element = <Employee id="51772545" name="saravana" departname="BCA"></Employee>

const element = <CountCharacters></CountCharacters>

ReactDOM.render(element, document.getElementById('root'));