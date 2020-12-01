import React , {Component} from 'react';
import '../cousre-list/course-list.css'

class CourseList extends Component {

    constructor() {
        super();
        this.state = {
            isEdit : false
        }
    }

    checkEdit = () => {
        const {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }

    SubmitEdit = (e) => {
    const {isEdit} = this.state;
    e.preventDefault();
    this.props.upDate(this.props.num , this.input.value);
    this.setState({
        isEdit : !isEdit
    })
    }
 
    addedList = () => {
        return (
            <li>
            <span>{this.props.course.name}</span>
            <div className="but-Content">
            <button  className="red" onClick={() => {this.props.action(this.props.num)}}> del </button>
            <button  className="green" onClick={() => {this.checkEdit()}}>editList</button>
            </div>
            </li> 
            
        )
    }

    EidtList = () => {
        return (
            <form onSubmit={this.SubmitEdit}>
            <input type="text" ref={(v) => {this.input = v}} defaultValue=
            {this.props.course.name}/>
            <button className="editUpdate">upDateEdit</button>
            </form>
        )
    }
    

    render(){
        const {isEdit} = this.state;
       return (
       <React.Fragment>
        {isEdit ? this.EidtList() : this.addedList() }
        </React.Fragment>
       )
    }
}

export default CourseList