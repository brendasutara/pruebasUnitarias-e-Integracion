import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heore por id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    
    expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe de retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    
    expect( hero ).toBeFalsy();
  })

  test('getHeroesByOwner debe retornar con los heroes de DC', () => {
    const owner = 'DC'
    const heroByOwnerDC = getHeroesByOwner(owner);
    
    expect(heroByOwnerDC.length).toBe(3);
    expect( heroByOwnerDC ).toEqual([
        { id: 1, name: 'Batman', owner: owner },
        { id: 3, name: 'Superman', owner: owner },
        { id: 4, name: 'Flash', owner: owner }
    ]);
    expect(heroByOwnerDC).toEqual(heroByOwnerDC.filter( (heroes) => heroes.owner === owner))
  })
  
  test('getHeroesByOwner debe retornar con los heroes de Marvel', () => {
    const owner = 'Marvel'
    const heroByOwnerMarvel = getHeroesByOwner(owner);
    
    expect(heroByOwnerMarvel.length).toBe(2);
    expect( heroByOwnerMarvel ).toEqual([
        { id: 2, name: 'Spiderman', owner: owner },
        { id: 5, name: 'Wolverine', owner: owner }
      ]
  )
  })
  
})
