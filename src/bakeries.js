import C from './constants'

export const bakeries = (state= [], action )=> {
    switch(action.type){
        case C.ADD_BAKERY:
            return [...state, action.payload]        
        default:
            return state
    }
}

export const filterReducer = (state=[], action) => {
    switch(action.type){
        case C.FILTER_PRODUCTS:
            return action.payload
        default: 
            return state
    }
}