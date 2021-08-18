const initState = {
    isLoading: false
}

type InitStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET_STATUS": {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: "SET_STATUS", isLoading} as const)