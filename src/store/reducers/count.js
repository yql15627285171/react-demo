
// import {  persistReducer } from 'redux-persist';
// // 可选cookie localStorage, sessionStorage
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const initialState = {
    count:1,
    count1:0,
    list:[]
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case 'INCREASE':
            return {...state, count:state.count + 1};
        case 'DECREASE':
            return {...state, count1:state.count1 - 1};
        case 'GETLISTS'://payload 有效载荷
			return { ...state, list: action.value };
        default:
            return state
    }
}

// const persistConfig = {
//     key: 'count',
//     storage: storage,
//     blacklist: ['list']
// };

export default reducer;