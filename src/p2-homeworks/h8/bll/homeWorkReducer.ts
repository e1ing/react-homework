import {UserType} from "../HW8";

const initialState: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {

    switch (action.type) {
        case 'sort': {
            let sortFunc = function compare(a: UserType, b: UserType) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0;
            }
            const newState = [...state].sort(sortFunc)
            return action.payload === "up" ? newState : newState.reverse();
        }
        case 'check': {
            return [...state].filter(a=> a.age >=action.payload)
        }
        default:
            return state;
    }
}


type ActionType = { type: "sort", payload: "up" | "down" } | { type: "check", payload: number }
