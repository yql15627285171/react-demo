
export const increase = () => {
    return {
        type: 'INCREASE'
    }
}

export const decrease = () => {
    return {
        type: 'DECREASE'
    }
}

export const getListData = (value)=>{
    return{
        type:'GETLISTS',
        value
    }
}


export const frechList = ()=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(getListData([{user:'張三',age:19}]));
        }, 500);
    }
}
