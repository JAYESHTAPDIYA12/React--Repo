// action file mei apn jo bhi actions perform honge ap meivo indahr defin hote hai

export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const clearAll = () => {
    return {
        type: "CLEARALL"
    }

}

export const mul = (num) => {
    return {
        type: "mul",
        payLoad: num
    }
}


export const div = (num) => {
    return {
        type: "div",
        payLoad: num
    }
}

