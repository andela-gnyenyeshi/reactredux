import React, { PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course });
  // }

  // onClickSave() {
  //
  //   // console.log(this.props.courses);
  //   // this.props.dispatch(courseActions.createCourse(this.state.course));
  //   // this.props.createCourse(this.state.course);
  //   this.props.actions.createCourse(this.state.course);
  //   // alert(`Saving ${this.state.course.title}`);
  // // }
  //
  // courseRow(course, index) {
  //   return (
  //     <div key={index}>
  //       {course.title}
  //       <h1>{course.length}</h1>
  //     </div>
  //   );
  //   // {this.props.courses.map(this.courseRow)}
  // }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
          ></input>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
  // createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log('Consumer Page state', state);
  return {
     courses: state.courses
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // createCourse: course => dispatch(courseActions.createCourse(course))
//     actions: bindActionCreators(courseActions, dispatch )
//   };
// }

export default connect(mapStateToProps)(CoursesPage);
