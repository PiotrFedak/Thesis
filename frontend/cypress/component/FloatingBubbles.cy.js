import FloatingBubbles from "../../src/layouts/FloatingBubbles";

describe('FloatingBubbles Component Test', () => {
  it('should render floating bubbles check lenght and size of the SVG icons', () => {
    cy.mount(<FloatingBubbles />);
    
    cy.get('svg').should('have.length', 8);
    cy.get('svg').each(($el) => {
      cy.wrap($el)
        .invoke('attr', 'height')
        .then((height) => {
          const size = parseFloat(height);
          expect(size).to.be.gte(30);
          expect(size).to.be.lte(50);
        });
    });

    cy.window().trigger('mousemove', { clientX: 100, clientY: 100 });
  });
});
