import C from './constants'

export const bakery = (state ={}, action) => {
    switch(action.type){
        case C.ADD_BAKERY:
            return{
                id: action.id,
                category: action.category,
                title: action.title,
                image: action.image,
                count: action.count 
            }  
                        
        default:
            return state
    }
}