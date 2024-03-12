/// <referece types='cypress'>

describe("Visualizar lista de livros", () => {
  it("Precisa ter uma lista com 12 livros", () => {
    cy.visit("http://localhost:5173/");
    cy.get("._card_dtxcm_1").should("have.length", 12);
  });
  it("Todo CardBook deve ter um Autor", () => {
    cy.visit("http://localhost:5173/");
    cy.get("._card_dtxcm_1").contains("Autor");
  });
  it("O Filtro de Gênero deve ter 10 opções",() => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="selectFilter"]').find('[data-cy="optionFilter"]').should('have.length', 10)
  })
});
