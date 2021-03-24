const { authReducer } = require("../../auth /authReducer")
const { types } = require("../../types/types")

// const state = {
//     name: 'Fernando',
//     logged: true
// }


describe('Pruebas en AuthReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        
        const state = authReducer( {logged: false}, {})
        expect( state ).toEqual({ logged: false })

    })

    test('Debe de autenticar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }


        const state = authReducer( {logged: false}, action)
        expect( state ).toEqual({ 
            logged: true,
            name: 'Hernando'
        })

    })

    test('debe de borrar el name del usuario y logged en false ', () => {
        
        const action = {
            type: types.logout,
        }


        const state = authReducer( {logged: true, name: 'Pedro'}, action)
        expect( state ).toEqual({ 
            logged: false,
        })

    })
    
    
})
