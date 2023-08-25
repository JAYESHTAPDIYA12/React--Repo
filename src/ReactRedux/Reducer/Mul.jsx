const intialState = 1;


const Mul = (state = intialState, action) => {
    switch (action.type) {
        case "mul":
            return state * action.payLoad
        case "div":
            return state / action.payLoad
        case "CLEARALL":
            return state = 1;
        default:
            return state;
    }

}

export default Mul;
