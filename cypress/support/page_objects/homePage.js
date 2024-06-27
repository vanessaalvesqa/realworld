class HomePage {
  visit() {
    cy.visit('/');
    cy.log('Visited the home page successfully');
  }

  selectFirstArticle() {
    this.clickFirstPreviewLink();
  }

  clickFirstPreviewLink() {
    cy.get('.preview-link', { timeout: 10000 })
      .should('be.visible')
      .first()
      .then($link => {
        if ($link) {
          cy.log('Found preview link:', $link.text());
          
          cy.wrap($link).scrollIntoView().click({ force: true });
          cy.log('Clicked the preview link successfully');
        } else {
          cy.log('No preview link found');
        }
      });
  }
}

export default HomePage;

