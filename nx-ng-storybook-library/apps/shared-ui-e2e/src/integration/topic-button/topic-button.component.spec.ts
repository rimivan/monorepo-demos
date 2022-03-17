describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topicbuttoncomponent--primary'));
  it('should render the component', () => {
    cy.get('my-org-topic-button').should('exist');
  });
});