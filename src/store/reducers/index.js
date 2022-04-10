
import { combineReducers } from 'redux';
import count from './count';
import student from './student';
//合并对象后，对象的层次会加深
export default combineReducers({
	count,
	student,
});
