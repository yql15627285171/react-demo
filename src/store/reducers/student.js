
const initialState = {
    name:'张三',
    age:0,
    sex:1
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case 'NAME':
            return {...state, name:action.value};
        case 'AGE':
            return {...state, age:action.value};
        case 'SEX'://payload 有效载荷
			return { ...state, sex: action.value };
        default:
            return state
    }
}

export default reducer