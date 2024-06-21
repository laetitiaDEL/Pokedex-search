describe('Pokedex Search Application', () => {
  beforeEach(() => {
    // Visite la page d'accueil avant chaque test
    cy.visit('/');
  });

  it('should load the home page', () => {
    // Vérifie que le titre de la page est correct
    cy.title().should('include', 'Pokedex Search');
  });

  it('should display the search input', () => {
    // Vérifie que l'input de recherche est présent
    cy.get('input[placeholder="Search Pokémon"]').should('be.visible');
  });

  it('should display results when searching for a Pokémon by name', () => {
    // Tape un nom de Pokémon dans l'input de recherche
    cy.get('input[placeholder="Search Pokémon"]').type('Pikachu');
    cy.get('#searchBtn').click();
    
    // Vérifie que les résultats de recherche contiennent Pikachu
    cy.get('.pokemon-card').should('contain', 'Pikachu');
  });
});
  