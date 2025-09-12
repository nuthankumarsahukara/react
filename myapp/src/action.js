export function deposit(amount){
    return{
        type:'account/deposit',
        payload : amount
    }
}

export function withdraw(amount){
    return{
        type:'account/withdraw',
        payload : amount
    }
}

export function name_action(name){
    return{
        type:'nameUpdate',
        payload : name
    }
}

export function mobile_action(mobile){
    return{
        type:'mobileUpdate',
        payload : mobile
    }
}