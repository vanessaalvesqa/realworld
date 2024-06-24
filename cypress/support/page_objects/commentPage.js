class CommentPage {
  addComment(comment) {
    cy.get('textarea[placeholder="Write a comment..."]').should('be.visible').should('not.be.disabled').type(comment);
    cy.get('button.btn.btn-sm.btn-primary').should('be.visible').should('not.be.disabled').click();
  }
}

export default CommentPage;
