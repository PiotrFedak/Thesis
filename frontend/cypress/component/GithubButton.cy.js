import React from 'react';
import { mount } from 'cypress/react';
import GithubButton from '../../src/components/common/GithubButton';

describe('GithubButton Component tests', () => {
  it('renders correctly with provided text', () => {
    const buttonText = 'Sign in with GitHub';
    mount(<GithubButton text={buttonText} />);
    cy.get('button').should('exist').and('contain.text', buttonText);
  });

  it('triggers the onClick when clicked', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    mount(<GithubButton text="Click Me" onClick={onClickSpy} />);
    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('has the correct styling on button', () => {
    mount(<GithubButton text="Styled Button" />);
    cy.get('button')
      .should('have.class', 'btn')
      .and('have.class', 'hover:scale-105')
      .and('have.class', 'hover:shadow-xl');
  });
});
