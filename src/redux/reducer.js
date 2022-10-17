// 監聽 action 依照不同動作來更新狀態
// 引入 action 定義初始狀態

import { CHANGE_NAME } from './action'

const initialState = {
    newName: 'Molly',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                newName: action.payload.newName,
            }
        default:
            return state
    }
}
