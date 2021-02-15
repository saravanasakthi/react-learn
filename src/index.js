import React, {createContext} from 'react';
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

// class CountCharacters extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     };
//   }

//   onMessageChange(value){
//     this.setState(
//       {
//         message: `Message has ${value.length} length`
//       }
//     )
//   }
//   render(){
//     return <div>
//       <h1>Welcome to count character...</h1>
//       <p><label><input type="text" onChange={e=> this.onMessageChange(e.target.value)}></input></label></p>
//       <p><label>{this.state.message}</label></p>
//     </div>
//   }
// }

// class Employee extends React.Component {
//   state = {counter: 0}
//   // counter = 0
//   addEmployee = ()=>{
//     this.setState({counter: this.state.counter + 1});
//     // this.counter = this.counter + 1;
//     // alert("Employee Added");
//     // alert(this.counter);
//   }
//   render(){
//     return <div>
//       <h2> Welcome to Employee component</h2>
//       <p>Counter clicked {this.state.counter} Times</p>
//       <p>
//         <button onClick={this.addEmployee}>Add Employee</button>
//       </p>
//     </div>
//   }
// }

// // const element = <Employee id="51772545" name="saravana" departname="BCA"></Employee>

// const element = <CountCharacters></CountCharacters>


// *************************************************************************************************

// Interaction between components


// class Employee extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       updatedSalary: null
//     }
//   }

//   getUpdatedSalary = (salary) =>{
//     this.setState({
//       updateSalary: salary
//     })
//   }

//   render() {
//     return <div>
//       <h2> Welcome to Employee component</h2>
//       <p>
//         <label>Employee Id: <b>{this.props.id}</b></label>
//       </p>
//       <p>
//         <label>Employee Name: <b>{this.props.name}</b></label>
//       </p>
//       <p>
//         <label>Updated Total Salary: <b>{this.state.updateSalary}</b></label>
//       </p>
//       <Salary basic={this.props.basic} hra={this.props.hra} onSalaryChanged={this.getUpdatedSalary}></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component {
//   constructor(props) {
//     super(props);    
//     this.state = {
//       basic: this.props.basic,
//       hra: this.props.hra
//     }

//     this.basicRef = React.createRef();
//     this.hraRef = React.createRef();
//     this.updateSalary = this.updateSalary.bind(this);
//   }

//   updateSalary = () => {
//     let salary = parseInt(this.basicRef.current.value) + parseInt(this.hraRef.current.value);
//     this.props.onSalaryChanged(salary);
//   }

//   render(){
//     return <div>
//       <h1>Salary details...</h1>
//       <p>
//         <label>Basic Salary: <input type="text" ref={this.basicRef} defaultValue={this.state.basic}></input></label>
//       </p>
//       <p>
//         <label>HRA: <input type="text" ref={this.hraRef} defaultValue={this.state.hra}></input></label>
//       </p>
//       <button onClick={this.updateSalary}>Update</button>
//     </div>
//   }
// }

// const element = <Employee id="51772545" name="Saravana" basic="15000" hra="14000"></Employee>


// *****************************************************************************************************************************

// component interaction using context and update component

// export const EmployeeContext = React.createContext({
//   data: '',
//   changeEmployeeInfo: () => {}
// });

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         Id: 51772545,
//         Name: "Saravana",
//         Location: "Chennai",
//         Salary: "15000"
//       },
//       changeEmployeeInfo: this.updateEmployeeDetails
//     }
//   }

//   updateEmployeeDetails = () => {
//     this.setState({data: {
//       Id: '51772532'
//     }});
//   }
//   render() {
//     return <div>
//       <h2>Welcome to App Component</h2>
//       <p>{this.state.data.Id}</p>
//       <EmployeeContext.Provider value={this.state}>
//         <Employee />
//       </EmployeeContext.Provider>      
//     </div>;
//   }
// }

// class Employee extends React.Component {
//   render() {
//     return <div>
//       <h2>Welcome to Employee Component...</h2>      
//       <EmployeeContext.Consumer>
//         {data => {
//           return data.data.Id;
//         }}
//       </EmployeeContext.Consumer>
//       <Salary></Salary>
//       <EmployeeContext.Consumer>
//         {data=>{
//           return <button onClick={data.changeEmployeeInfo}>Change</button>
//         }}
//       </EmployeeContext.Consumer>
//     </div>;
//   }
// }

// class Salary extends React.Component {
//   render() {
//     return <div>
//       <h2>Welcome to Salary Component...</h2>
//       <EmployeeContext.Consumer>
//         {data => {
//           return data.data.Id;
//         }}
//       </EmployeeContext.Consumer>
//     </div>;
//   }
// }

// const element = <App></App>

// *********************************************************************************************************************************

// Iterating over list of objects

// const employees = [
//   {Id: 51772545, Name: 'Saravana', Location: 'Chennai', Salary: 15000},
//   {Id: 51662374, Name: 'Elumalai', Location: 'Chennai', Salary: 15000},
//   {Id: 51790707, Name: 'Vinoth', Location: 'Chennai', Salary: 15000}
// ];

// function EmployeeDisplay(props) {
//   return <div style={{border: "3px solid red"}}>
//     <p>
//       <label>Employee Id: <b>{props.data.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name: <b>{props.data.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location: <b>{props.data.Location}</b></label>
//     </p>
//   </div>
// }

// function Employee(props) {
//   const empList = props.employeeList;

//   const listElements = empList.map((emp)=> {
//     return <EmployeeDisplay key={emp.Id} data={emp}></EmployeeDisplay>
//   });

//   return (<div>
//     {listElements}
//   </div>)
// }

// const element = <Employee employeeList={employees}></Employee>


// **************************************************************************************************************************

// REST API call

class EmployeeComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      employees: []
    }
  }

  //will run when the respective component is rendered to DOM
  componentDidMount() {     
    fetch(`http://10.126.243.9:9002/getEmployee/51772545`).then(
      res=> res.json()
    ).then(result=>{
      this.setState({employees: result.Data})
    })

  }

  render () {
    console.log(this.state.employees)
    return <div>
      <h2>Employee Details</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Employee No</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.employees.map((emp)=>{
              return <tr key={emp.EmployeeNo}>
                <td>{emp.EmployeeNo}</td>
                <td>{emp.Name}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  }

}

const element = <EmployeeComponent> </EmployeeComponent>


ReactDOM.render(element, document.getElementById('root'));