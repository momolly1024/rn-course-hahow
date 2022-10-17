// action 定義名稱 規則動作 ; 全大寫表不可變 回傳物件有 type payload

export const CHANGE_NAME = 'CHANGE_NAME'

export function changeName(newName) {
    return {
        type: CHANGE_NAME,
        payload: { newName: newName },
    }
}
