
// let state = { numberOfPresents: 0 } // or let state;

// export function managePresents(state, action) {
//     switch(action.type) {

//         case 'INCREASE':
//             return { numberOfPresents: state.numberOfPresents + 1 }
//                 default:
//                     return state
//         }
//     }

let state;

export function managePresents( state = { numberOfPresents: 0 }, action) {
    switch(action.type) {

        case 'INCREASE':
            return {...state, 
                numberOfPresents: state.numberOfPresents + 1 }
                default:
                    return state
        }
    }

// export function managePresents(state = { numberOfPresents: 0, action}) {
//     switch(action.type) {

//         case 'INCREASE':
//             return Object.assign({}, state, { 
//                 numberOfPresents: state.numberOfPresents + 1})
//                 default:
//                     return state
//             }
//     }

// export function managePresents(state = { numberOfPresents: 0}, action) {
//     switch(action.type) {

//         case 'INCREASE':
//             return {...state,
//                 numberOfPresents: state.numberOfPresents + 1 }
//                     default: 
//                      return state
//             }
//     }