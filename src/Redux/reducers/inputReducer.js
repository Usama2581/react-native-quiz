function inputReducer (state = [], action){
    switch (action.type) {
        case 'INPUT_DATA':
            return {
                input: action.payload
            }
        default: return state
        
    }
}

export default inputReducer