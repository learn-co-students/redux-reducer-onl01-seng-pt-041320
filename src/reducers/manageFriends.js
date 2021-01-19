<<<<<<< HEAD
let state = ( {
    friends: []} )

export function manageFriends(state, action){
        switch(action.type) {
        
            case "ADD_FRIEND":
                 // console.log("action", action)
                return { friends:[...state.friends, action.friend]}
        
            // step 1 - find index of items to remove
            // step 2 - slice a new array from the old array excluding that index
            
=======


export function manageFriends(state = {
    friends: []}, action) {
        switch(action.type) {

            case "ADD_FRIEND":
                // console.log("action", action)
                return { friends:[...state.friends, action.friend] }

                // step 1 - find index of items to remove
                // step 2 - slice a new array from the old array excluding that index

>>>>>>> 01a76799437f3ea048f5e51401734b9b151a5c3c
            case "REMOVE_FRIEND":
                   const removeId = state.friends.findIndex(friend => friend.id === action.id)
                
                return(
                    {...state, friends:[...state.friends.slice(0, removeId),
                        ...state.friends.slice(removeId + 1) ]}
                )
        
                default:
                    return state;
     }
<<<<<<< HEAD
}
=======
}
 


>>>>>>> 01a76799437f3ea048f5e51401734b9b151a5c3c
