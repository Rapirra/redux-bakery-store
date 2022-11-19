import C from './constants'

export const cartActions = (state={}, action) => {
    switch(action.type){
        case C.SHOW_CARD:
            return  [...state, action.payload]
        case C.REMOVE_FROM_CART:
            return   state.filter(
                c => c.id !== action.payload
            )
        case C.ADD_COUNT:
            return state.filter(                
                c => {                    
                    if(c.id === action.payload.id){
                    c.count += 1}
                    return c.count;
                }
            )
        case C.DECREASE_COUNT: 
            return state.filter(                
                c => {                    
                    if(c.id === action.payload.id){
                    c.count -= 1}
                    return c.count;
                }
            )
        
        
        default:
            return state
    }
}
