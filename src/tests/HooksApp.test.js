import React from 'react'
import { shallow } from "enzyme";
import HooksApp from "../HooksApp";

describe('Pruebas HooksApp', () => {
    
    let wrapper = shallow(<HooksApp />)
    
    beforeEach(() => {
        wrapper = shallow(<HooksApp />)
    })

    test('debe de mostar <HooksApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    });

});