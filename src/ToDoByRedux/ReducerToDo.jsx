const intialState = {
    list: []
}

const ReducerToDo = (state = intialState, action) => {
    switch (action.type) {
        case "add":
            const { id, data } = action.payLoad;

            if (data.length > 2) {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]

                }
            }
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]

            }
        case "remove":

            const newlist = state.list.filter((ele) => ele.id !== action.id)
            return {
                ...state,
                list: newlist
            }
        case "clearall":
            return {
                list: []
            }

        default:
            return state;

    }

}

export default ReducerToDo;