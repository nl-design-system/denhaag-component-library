import * as React from 'react';
import { mount as cypressMount } from '@cypress/react';
import StylesProvider from '../../src/components/StylesProvider/src/index';
import '../../src/styles/Common/dist/index';
import '../../src/styles/Components/dist/index';
import '../../src/styles/Proprietary/dist/index';
import pkg from '../../package.json';

Cypress.Commands.add('mount', (children) => {
  return cypressMount(<StylesProvider>{children}</StylesProvider>);
});

Cypress.Commands.add('multimount', (Component, props) => {
  let children = [];

  children.push(
    <div
      key="original"
      style={{
        /* stylelint-disable-next-line property-disallowed-list */
        padding: 10,
      }}
    >
      <Component.type {...Component.props} />
    </div>,
  );

  Object.keys(props).forEach((key) => {
    const prop = Array.isArray(props[key]) ? props[key] : [props[key]];
    prop.forEach((propValue) => {
      let extraProps = {};
      extraProps[key] = propValue;
      children.push(
        <div
          key={`${key}-${propValue}`}
          style={{
            /* stylelint-disable-next-line property-disallowed-list */
            padding: 10,
          }}
        >
          <Component.type {...extraProps} {...Component.props} />
        </div>,
      );
    });
  });

  return cypressMount(
    <StylesProvider>
      <div id="wrapper" style={{ display: 'inline-block' }}>
        {children}
      </div>
    </StylesProvider>,
  );
});

Cypress.Commands.add('snapshots', (Component, props, extraClasses, knownIssues = []) => {
  if (extraClasses && extraClasses.selector && extraClasses.states) {
    Object.keys(extraClasses.states).forEach((state) => {
      cy.multimount(Component, props);
      cy.get(extraClasses.selector).invoke('addClass', extraClasses.states[state]);
      cy.get('#wrapper').toMatchImageSnapshot({ name: `${Component.type.name}--${state}` });
    });
  }

  cy.multimount(Component, props);

  cy.get('#wrapper').toMatchSnapshot();
  cy.get('#wrapper').toMatchImageSnapshot({ name: Component.type.name });

  cy.injectAxe();
  cy.configureAxe({
    rules: knownIssues.map((issue) => {
      cy.task(
        'warn',
        `${Cypress.env('CICD') ? '::warning:: testje' : ''}\x1b[33m    ! Disabled "${issue.id}" rule for ${
          Component.type.name
        }: known issue (${pkg.bugs}/${issue.issue})`,
      );
      return { id: issue.id, reviewOnFail: true };
    }),
  });
  cy.checkA11y('#wrapper', null, (violations) => {
    cy.task('a11yLog', violations);
  });
});
