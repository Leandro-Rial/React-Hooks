import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../../components/hooks/useCounter";
import useFetch from "../../../components/hooks/useFetch";
jest.mock("../../../components/hooks/useFetch")
jest.mock("../../../components/hooks/useCounter")

describe('Pruebas en MultipleCustomHooks', () => {

    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    test('debe de mostrar <MultipleCustomHooks /> correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        
        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper).toMatchSnapshot()

    });
    
    test('debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Leandro',
                quote: "Helouda"
            }],
            loading: false,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-4').text().trim()).toBe('Helouda');
        expect(wrapper.find('footer').text().trim()).toBe('Leandro');

    });
});