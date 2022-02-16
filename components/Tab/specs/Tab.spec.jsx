import * as React from 'react';
import Tab, { TabContext, TabPanel, Tabs } from '../dist';

describe('Tab tests', () => {
  // TODO: fix tab tests.
  /*
    id and aria-labelledby are set since otherwise they were randomly generated by MUI, which fails the HTML snapshot test.
    Functionality tests should be added, but due to React.useState/React.setState not working in the tests we need to look for a workaround/fix.
  */

  it('a11y and snapshots', () => {
    cy.snapshots(
      <TabContext value="0">
        <Tabs value={0}>
          <Tab label="Label" value={0} />
          <Tab label="Another tab" disabled value={1} />
          <Tab label="Yet another tab" value={2} />
        </Tabs>
        <TabPanel value="0" id="" aria-labelledby="">
          Item One
        </TabPanel>
        <TabPanel value="1" id="" aria-labelledby="">
          Item Two
        </TabPanel>
        <TabPanel value="2" id="" aria-labelledby="">
          Item Three
        </TabPanel>
      </TabContext>,
      {},
      {},
      [],
      'Tab',
    );
  });
});
