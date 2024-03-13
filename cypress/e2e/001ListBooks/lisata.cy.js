/// <referece types='cypress'>

describe("Visualizar lista de livros", () => {
  it("Precisa ter uma lista com 12 livros", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='cardBooks']").should("have.length", 12);
  });
  it("Todo CardBook deve ter um Autor", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='cardBooks']").contains("Autor");
  });
  it("O Filtro de Gênero deve ter 10 opções", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="selectFilter"]')
      .find('[data-cy="optionFilter"]')
      .should("have.length", 10);
  });
  it("Filtro de Gênero", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="selectFilter"]').select("Fantasia");
    cy.get("[data-cy='cardBooks']").should("have.length", 2);
  });
  it("Filtro por Título", () => {
    cy.visit("http://localhost:5173/");
    const searchTerm = cy.get(" [data-cy='inputBusca']");
    searchTerm.type("1984");
    cy.get("[data-cy='cardBooks']").should("have.length", 1);
  });
  it("Filtro por Autor", () => {
    cy.visit("http://localhost:5173/");
    const searchTerm = cy.get(" [data-cy='inputBusca']");
    searchTerm.type("George");
    cy.get("[data-cy='cardBooks']").should("have.length", 2);
  });
});
