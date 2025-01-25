import React from 'react';
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import CustomButton from '../../src/components/common/CustomButton';

describe('CustomButton Component Test', () => {
  it('should render with correct text and link', () => {
    const text = 'Home';
    const link = '/home';

    mount(
      <MemoryRouter>
        <CustomButton to={link}>{text}</CustomButton>
      </MemoryRouter>
    );

    cy.get('a').should('have.text', text).and('have.attr', 'href', link);
  });

  it('should have correct styling and hover effects', () => {
    mount(
      <MemoryRouter>
        <CustomButton to="/">Button</CustomButton>
      </MemoryRouter>
    );

    cy.get('a')
      .should('have.class', 'bg-custom-blue')
      .and('have.class', 'text-white')
      .trigger('mouseover')
      .should('have.class', 'hover:bg-custom-white')
      .and('have.class', 'hover:text-custom-blue');
  });
});
