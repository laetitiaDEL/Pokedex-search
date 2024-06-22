describe('Pokedex Search Application', () => {
  beforeEach(() => {
    // Visite la page d'accueil avant chaque test
    cy.visit('/');
  });

  it('should have the home page title', () => {
    // Vérifie que le titre de la page est correct
    cy.title().should('include', 'Pokedex Search');
  });

  it('should have a search button', () => {
    // Vérifie que l'input de recherche est présent
    cy.get('#searchBtn').should('contain', 'Search');
  });

  it('should display results when searching for a Pokémon by name', () => {
    // Tape un nom de Pokémon dans l'input de recherche
    cy.get('input[placeholder="Search Pokémon"]').type('Pikachu');
    cy.get('#searchBtn').click();
    // Vérifie que les résultats de recherche contiennent Pikachu
    cy.get('.pokemon-card').should('contain', 'Pikachu');
  });

  it('should display Pokémon details when a Pokémon is clicked', () => {
    ///clique sur un pokemon de la liste
    cy.get('.pokemonList').contains('Pikachu').click();
    //vérifie qu'il y a bien l'élément 
    cy.get('.pokemonDetails').should('contain', 'Pikachu');
  });

  it('should clear the search input after search', () => {
    // Tape un nom de Pokémon dans l'input de recherche
    cy.get('input[type="text"]').type('Pikachu');
    //clique sur le bouton de recherche
    cy.get('#searchBtn').click();
    //vérifie que la valeur de l'input est vide
    cy.get('input[type="text"]').should('have.value', '');
  });
});
  