Cypress.Commands.add("login", (username, password) => {
  cy.session(
    username, // সেশন আইডি হিসাবে ইউজারনেম ব্যবহার করছি
    () => {
      cy.visit("/login");
      cy.get("input[name=email]").type(username);
      cy.get("input[name=password]").type(`${password}{enter}`, { log: false });
      cy.url().should("include", "/dashboard");
      cy.get("h1").should("contain", username);
    },
    {
      validate: () => {
        cy.getCookie("your-session-cookie").should("exist");
      },
    }
  );
});
