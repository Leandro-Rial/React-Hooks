import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/components/TodoAdd";

describe("Pruebas en TodoAdd", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("debe de mostrar <TodoAdd /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("no debe de llamar handleAddTodo", () => {
    const submit = wrapper.find("form").prop("onSubmit");

    submit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe de llamar la funcion handleAddTodo", () => {
    const value = "Aprender React";

    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const submit = wrapper.find("form").prop("onSubmit");

    submit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
        id: expect.any(Number),
        desc: value,
        done: false
    });

    expect(wrapper.find('input').prop('value')).toBe('')
  });
});
