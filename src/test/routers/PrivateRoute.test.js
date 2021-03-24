import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('Pruevas en <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    
    test('deben de mostrar el componente si esta autenticado y guardar en localStorage', () => {

        // const wrapper = mount(

        //     <MemoryRouter>

        //         <PrivateRoute
        //         isAuthenticated={true}
        //         component={ () => <span>Listo!</span>}
        //         {...props}
        //         />

        //     </MemoryRouter>

        // );

        // expect( wrapper.find('span').exists()).toBe(true)


    })


    
})
