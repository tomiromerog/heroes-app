import React from 'react';
import { AuthContext } from '../../auth /AuthContext';
import { AppRouter } from '../../routers/AppRouter';
import { mount } from "enzyme";


describe('Pruebas en <AppRouter/>', () => {
    
    test('debe de mostrar el loggin ', () => {
        

        const wrapper = mount(
            <AuthContext.Provider>

                <AppRouter/>

            </AuthContext.Provider>
        )


    })
    
})
