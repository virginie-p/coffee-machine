import {coffeeMachine} from './coffeeMachine'

describe('the user passes an order', () => {
    test('he orders a coffee', () => {
        expect(coffeeMachine({drink: 'coffee'})).toEqual('C::')
    })
    test('he orders a tea', () => {
        expect(coffeeMachine({drink: 'tea'})).toEqual('T::')
    })
    test('he orders a chocolate', () => {
        expect(coffeeMachine({drink: 'chocolate'})).toEqual('H::')
    })
})

describe('the user passes an order with 1 sugar', () => {
    test('he orders a coffee', () => {
        expect(coffeeMachine({drink: 'coffee', sugar: 1})).toEqual('C:1:0')
    })
    test('he orders a tea', () => {
        expect(coffeeMachine({drink: 'tea', sugar: 1})).toEqual('T:1:0')
    })
    test('he orders a chocolate', () => {
        expect(coffeeMachine({drink: 'chocolate', sugar: 1})).toEqual('H:1:0')
    })
})

describe('the user passes an order with 2 sugar', () => {
    test('he orders a coffee', () => {
        expect(coffeeMachine({drink: 'coffee', sugar: 2})).toEqual('C:2:0')
    })
    test('he orders a tea', () => {
        expect(coffeeMachine({drink: 'tea', sugar: 2})).toEqual('T:2:0')
    })
    test('he orders a chocolate', () => {
        expect(coffeeMachine({drink: 'chocolate', sugar: 2})).toEqual('H:2:0')
    })
})

describe('the user orders doesn\'t give enough money', () => {
    test('he orders a coffee', () => {
        expect(coffeeMachine({drink:'coffee', money: 0.5})).toEqual('M:Not Enough Change')
    })
    test('he orders a tea', () => {
        expect(coffeeMachine({drink:'tea', money: 0.3})).toEqual('M:Not Enough Change')
    })
    test('he orders a chocolate', () => {
        expect(coffeeMachine({drink:'chocolate', money: 0.4})).toEqual('M:Not Enough Change')
    })

})