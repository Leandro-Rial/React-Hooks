import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../components/hooks/useForm";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Leandro',
        email: 'leandro@email.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));

        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook(() => useForm(initialForm));

        const [ , handleInputChange ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'helouda'
                }
            });
        });

        const [ value ] = result.current;

        expect(value).toEqual({...initialForm, name: 'helouda'})

    });

    test('debe de reestablecer el formulario con reset', () => {
        
        const { result } = renderHook(() => useForm(initialForm));

        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'helouda'
                }
            });

            reset();
        });

        const [ value ] = result.current;

        expect(value).toEqual({...initialForm})

    });

});