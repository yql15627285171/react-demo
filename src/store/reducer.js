/*
 * @Author: huangl
 * @Date: 2022-04-07 10:28:50
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-08 14:54:37
 * @Description: 创建初始状态，导出文件
 */
const defaultState = {
    num: 1
}

const state = (state = defaultState, action) => { 
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) { 
        case "addNum":
            setTimeout(() => {
                newState.num += action.value;
            }, 1000);
            
            break;
        default:
            break;
    }
    return newState
}



// 导出一个函数
export default state