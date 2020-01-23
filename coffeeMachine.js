const prepareDrink = (order) => {
    if(order.drink === 'coffee') {
         return 'C'
    }

    if(order.drink === 'tea') {
        return 'T'
    }

    if(order.drink === 'chocolate') {
        return 'H'
    }
}

const prepareSugarWithStick = order =>  order.sugar ? `:${order.sugar}:0` : '::'

const checkChange = (order) =>
    ((order.drink === 'coffee' && order.money < 0.6)
    || (order.drink === 'tea' && order.money < 0.4)
    || (order.drink === 'chocolate' && order.money < 0.5)) ?
    'M:Not Enough Change' : ''


export const coffeeMachine = (order) => {
    return checkChange(order) ? checkChange(order) : prepareDrink(order) + prepareSugarWithStick(order)
}