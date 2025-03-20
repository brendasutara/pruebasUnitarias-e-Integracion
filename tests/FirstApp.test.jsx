import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Prueas en <FirstApp />', () => {
//   test('Debe hacer match con el snapshot', () => {
//     const title = 'Hola, soy Goku';
//     const { container } = render( <FirstApp title={ title }/>)

//     expect(container).toMatchSnapshot();
//   })

  test('debe mostrar el título en un H1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title }/>)

    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain( title )
    expect( getByTestId('test-title').innerHTML ).toContain(title);

  })

  test('debe de mostrar el subtitulo por props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Chau, soy un subtítulo';
    const { getByText } = render(<FirstApp title={title} subTitle={subTitle} />);
  
    expect(getByText(subTitle)).toBeTruthy();
  })
  
  
  
})
