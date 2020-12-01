import logo from './logo.svg';
import CourseList from './Components/cousre-list/course-list'
import CourseLForm from './Components/course-form/course-form'
import './App.css';
import React , { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses : [
        {name : "Html"},
        {name : "css"},
        {name : "JavaScript"}
      ],
      current : ""
    }
  }


  inputUpdate = (e) => {
   this.setState({
    current : e.target.value
   })

  }

  submitValue = (e) => {
   e.preventDefault();
   let courses = this.state.courses;
   let current = this.state.current;
   if(this.state.current){
    courses.push({name : current})
    this.setState({
     courses,
     current : ""
    })
   }else{
     return false
   }
   
  }

  getButton = (index) => {
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({courses})
   }

   upDateEdit = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({courses})
 
   }

  render(){
    const {courses} = this.state;
    const length = courses.length;
    const myCourses = length ? ( courses.map((res, index) => {
      return <CourseList course = {res}  
      key={index} 
      num = {index}
      action = {this.getButton}
      upDate = {this.upDateEdit}
      />
    })) : (
      <p>no courses to show</p>
    )
   
    return (
      <div className="container">
      <CourseLForm update = {this.inputUpdate} submit = {this.submitValue} current={this.state.current}/>
      <ul>
      {myCourses}
      </ul>
    <div>
      <p>
    items : {courses.length}</p>
    </div>
      </div>
    );
  }
}

export default App;
