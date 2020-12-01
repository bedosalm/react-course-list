import React , {Component} from 'react';
import '../course-form/course-form.css'

const CourseForm = (props) => { 
       return (
        <form onSubmit={props.submit}>
            <input type="text" onChange={props.update} value={props.current}/>
            <button className="submitbut" type="submit">submit</button>
        </form>
       )
}

export default CourseForm