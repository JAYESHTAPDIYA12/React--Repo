export const add = (data) => {
    return {
        type: "add",
        payLoad: {
            id: new Date().getTime().toString(),
            data: data
        }

    }
}

export const remove = (id) => {
    return {
        type: "remove",

        id

    }
}

export const clearall = () => {
    return {
        type: "clearall"
    }
}