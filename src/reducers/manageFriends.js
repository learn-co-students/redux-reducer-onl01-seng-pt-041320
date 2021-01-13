export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            state.friends.push(action.friend)
          return {friends: state.friends}
          case 'REMOVE_FRIEND':
            let newArray = state.friends.filter(f => f.id !== action.id)
          return {friends: newArray}
        default:
          return state;
      }
}
