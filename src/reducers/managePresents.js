<<<<<<< HEAD
export function managePresents(state, action){
}
function managePresents(state = { numberOfPresents: 0 }, action ) {
    switch(action.type) {
        case "INCREASE":
        return {numberOfPresents: state.numberOfPresents + 1 }
            default:
            return state
    }

}
=======

export function managePresents(state = {
    numberOfPresents: 0}, action) {
        switch (action.type) {
        
            case 'INCREASE':
          return {...state, 
                numberOfPresents: state.numberOfPresents + 1 }
              default:
                return state;
        }
    }

>>>>>>> 01a76799437f3ea048f5e51401734b9b151a5c3c
