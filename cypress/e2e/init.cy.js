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
    
    // Vérifie que les résultats de recherche contiennent Pikachu
    cy.get('.pokemon-card').should('contain', 'Pikachu');
  });

  it('should display results when searching for a Pokémon by type', () => {
    // Sélectionne un type de Pokémon dans un menu déroulant ou un autre élément de filtrage
    cy.get('select[placeholder="Select Type"]').select('Electric');
    
    // Vérifie que les résultats de recherche contiennent au moins un Pokémon de type Electric
    cy.get('.pokemon-card').should('contain', 'Electric');
  });

  it('should handle no results found', () => {
    // Tape un nom de Pokémon inexistant dans l'input de recherche
    cy.get('input[placeholder="Search Pokémon"]').type('NonExistentPokemon');
    
    // Vérifie que le message "No Pokémon found" ou un message similaire est affiché
    cy.get('.no-results').should('contain', 'No Pokémon found');
  });
});
  