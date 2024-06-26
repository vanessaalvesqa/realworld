class HomePage {
  visit() {
    cy.visit('/');
  }

  selectFirstArticle() {
    cy.get('.article-preview', { timeout: 10000 })
      .first()
      .should('be.visible')
      .click();
    this.clickFirstVisibleH1OnPage();
  }

  clickFirstVisibleH1OnPage() {
    cy.get('h1', { timeout: 10000 }).each(($el, index, $list) => {
      if ($el.is(':visible')) {
        cy.log('H1 text:', $el.text());
        cy.wrap($el).scrollIntoView();
        cy.wrap($el).click({ force: true });
        return false;
      }
    });
  }
}

export default HomePage;
