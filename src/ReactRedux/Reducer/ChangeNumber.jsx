// iss file mein jo bhu apne ne actions banaye hai unko yaha functionality define karte hai

const intialState = 0;
const ChangeNumber = (state = intialState, actions) => {
    switch (actions.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "CLEARALL":
            return state = 0;

        default:
            return state
    }

}

export default ChangeNumber;