import React from "react";
import { mount } from "cypress/react18";
import ScrollToTopButton from "../../src/components/common/ScrollToTopButton";

describe("ScrollToTopButton Component Test", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.document().then((doc) => {
      const largeContent = doc.createElement("div");
      largeContent.style.height = "2000px";
      largeContent.style.background = "lightgray";
      doc.body.appendChild(largeContent);
    });

    cy.document().then((doc) => {
      const footer = doc.createElement("footer");
      footer.style.height = "100px";
      footer.style.position = "absolute";
      footer.style.top = "1900px"; 
      doc.body.appendChild(footer);
    });

    mount(<ScrollToTopButton />);
  });

  it("should render the button when scrolling past 800px", () => {
    cy.scrollTo(0, 900);
    cy.get("#\\#Scroll-to-top").should("be.visible");
  });

  it("should hide the button when on top of the site", () => {
    cy.scrollTo(0, 500);
    cy.get("#\\#Scroll-to-top").should("not.exist");
  });
});
