class ArticlePage {
  visit() {
    cy.visit('/editor');
  }

  fillTitle(title) {
    cy.get('input[placeholder="Article Title"]').should('not.be.disabled').type(title);
  }

  fillDescription(description) {
    cy.get('input[placeholder="What\'s this article about?"]').should('not.be.disabled').type(description);
  }

  fillBody(body) {
    cy.get('textarea[placeholder="Write your article (in markdown)"]').should('be.visible').should('not.be.disabled').type(body);
  }

  fillTags(tags) {
    cy.get('input[placeholder="Enter tags"]').should('not.be.disabled').type(tags);
  }

  submit() {
    cy.get('button.btn.btn-lg.pull-xs-right.btn-primary').should('be.visible').should('not.be.disabled').click();
  }
}

export default ArticlePage;
