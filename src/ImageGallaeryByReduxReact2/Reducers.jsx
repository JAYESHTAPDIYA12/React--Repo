import menu from "./Menu";

const intialState = {
    list: [...menu]
}


const Reducers = (state = intialState, action) => {
    switch (action.type) {
        case "breakfast":
            state.list = [...menu]

            const newList = state.list.filter((ele) => {
                return (
                    ele.category === action.type
                )

            })
            let list = [...newList];
            return {
                ...state,
                list: list
            }

        case "lunch":
            state.list = [...menu]

            const newList3 = state.list.filter((ele) => {
                return (
                    ele.category === action.type
                )

            })
            let list3 = [...newList3];
            return {
                ...state,
                list: list3
            }


        case "snacks":
            state.list = [...menu]

            const newList2 = state.list.filter((ele) => {
                return (
                    ele.category === action.type
                )

            })
            let list2 = [...newList2];
            return {
                ...state,
                list: list2
            }



        case "dinner":
            state.list = [...menu]

            const newList4 = state.list.filter((ele) => {
                return (
                    ele.category === action.type
                )

            })
            let list4 = [...newList4];
            return {
                ...state,
                list: list4
            }





        case 'all':
            const list6 = [...menu]
            return {
                ...state,
                list: list6
            }


        default:
            return state

    }
}


export default Reducers;