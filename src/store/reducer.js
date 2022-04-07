/*
 * @Author: huangl
 * @Date: 2022-04-07 10:28:50
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 14:02:05
 * @Description: 创建初始状态，导出文件
 */
const defaultState = {
    num: 1
}

const state = (state = defaultState, action) => { 
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) { 
        case "addNum":
            newState.num += action.value;
            break;
        default:
            break;
    }
    return newState
}

// 导出一个函数
export default state