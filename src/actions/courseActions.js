import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
   debugger;
   return {
     type: types.CREATE_COURSE,
     course
   };
 }

export function loadCourses() {
  return dispatch => {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error); 
    });
  };
}
