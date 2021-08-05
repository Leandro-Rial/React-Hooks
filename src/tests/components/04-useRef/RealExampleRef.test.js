import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en RealExampleRef', () => {
    
    const wrapper = shallow(<RealExampleRef />)

    test('debe de mostrar <RealExampleRef /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MMultipleCustomHooks').exists()).toBe(false);

    });
    
    test('debe de mostrar el componente <MultipleCustomHooks /> correctamente', () => {

        wrapper.find('button').simulate('click')

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });

});