it("Тест https://www.globalsqa.com/angularJs-protractor/BankingProject", () => {
  cy.visit(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
  );
  cy.get("button").contains("Customer Login").should("be.visible").click();

  //страница customer
  cy.url().should("include", "/#/customer");

  cy.get('select[name="userSelect"]').as("userSelect");
  cy.get("@userSelect")
    .contains("Harry Potter")
    .then((option) => {
      cy.get("@userSelect")
        .select(option.text())
        .should("have.value", option.val());
    });

  cy.get("button").contains("Login").should("be.visible").click();

  //страница выбора счета
  cy.url().should("include", "/#/account");
  cy.get("span").contains("Harry Potter").should("be.visible");
  cy.contains("button", "Deposit")
    .should("have.attr", "ng-click", "deposit()")
    .click();

  //страница счета
  cy.get('input[type="number"][ng-model="amount"]').clear().type("1000");
  cy.contains('button[type="submit"]', "Deposit").click();
  cy.contains("Deposit Successful").should("be.visible");
  cy.contains("button", "Logout").click();

  //страница customer
  cy.url().should("include", "/#/customer");
});
