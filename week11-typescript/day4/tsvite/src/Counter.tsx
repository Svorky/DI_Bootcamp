import { createContext, useReducer } from 'react'

type InitialStateType = {
    count: number
}

const initialState: InitialStateType = {
    count: 0
}

enum ActionsEnum {
    INCREMENT,
    DECREMENT
}

// type ActionTypes = 'INCREMENT' | 'DECREMENT'

// type ReducerActions = {
//     INCREMENT: ActionTypes,
//     DECREMENT: ActionTypes
// }

type ReducerAction = {
    type: ActionsEnum,
    payload?: number
}

const reducer = (state: InitialStateType, action: ReducerAction): InitialStateType => {
    switch (action.type) {
        case ActionsEnum.INCREMENT:
            if(!action.payload) return state
            return {...state, count: state.count + action.payload}
        case ActionsEnum.DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

// interface AuthContextType {
//     token: string;
// }

// const AuthContext = createContext<AuthContextType | null>(null)

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {dispatch({type: ActionsEnum.INCREMENT, payload: 1})}
    const decrement = () => {dispatch({type: ActionsEnum.DECREMENT})}

  return (
    <>
    <h1>Count: {state.count}</h1>
    <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
    </div>
    </>
  )
}

export default Counter