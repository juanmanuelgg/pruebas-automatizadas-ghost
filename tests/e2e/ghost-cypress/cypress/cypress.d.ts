import { MountOptions, MountReturn } from 'cypress/react';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get one or more DOM elements by the data-testid attribute.
             * @param selector A data-testid attribute value used to filter matching DOM elements.
             * @param options Pass in an options object to change the default behavior of cy.get(). Reference from cypress.
             */
            getByTestSelector<E extends Node = HTMLElement>(
                selector: string,
                options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
            ): Chainable<JQuery<E>>;
        }
    }
}
