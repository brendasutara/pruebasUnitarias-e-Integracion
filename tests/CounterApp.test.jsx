import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp/>', () => {

    const initialValue = 10;
    
    test('debe de hacer el match con el snapshot', () => {
        const {container} = render( <CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value={100} />)
        expect( screen.getByText(100)).toBeTruthy();
     })

     test('debe de incrementar con el botón +1', () => {
        render( <CounterApp value={initialValue} />)
        fireEvent
     })  
  
})
