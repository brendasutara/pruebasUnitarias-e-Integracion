import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Prueas en <FirstApp />', () => {

  const title = 'Hola, soy Goku';
  const subTitle = 'Chau, soy un subtítulo';

  test('debe de hacer match con el snapshot ', () => {
    const {container} = render( <FirstApp title={title} />)
    expect(container).toMatchSnapshot();
  })
  
  test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
    render( <FirstApp title={title} />)
    expect( screen.getByText(title) ).toBeTruthy();
  })
  
  test('debe de mostrar un h1', () => {
    render( <FirstApp title={title} />)
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
  })
  
  test('debe de mostrar el subtítulo por las props', () => {
    render(
      <FirstApp 
        title={title} 
        subTitle={subTitle} 
      />
    );

    expect(screen.getAllByText(subTitle).length).toBe(1);
  })
  
  
})
