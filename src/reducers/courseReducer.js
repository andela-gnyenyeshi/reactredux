export default function courseReducer(state = [], action) {
  switch(action.tyoe) {
    case 'CREATE_COURSE':
      return [...state, Object.assign({}, action.course)];
       default:
        return state;
  }
}
