export default function todos(state = [], action) {
    //ACTION
    //{ type: ADD_TODO, payload: 'Estudar React' }
    switch (action.type) {
        case 'ADD_TODO':
            return [ ...state, { id: Math.random(), text: action.payload }]
        default:
            return state
    }
}