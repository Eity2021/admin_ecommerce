describe("The Home Page", () => {
  beforeEach(() => {
    cy.exec("npm run db:reset && npm run db:seed", {
      failOnNonZeroExit: false,
      cwd: "../server",
    });
  });
  it("successfully loads", () => {
    cy.visit("/");
  });
});
