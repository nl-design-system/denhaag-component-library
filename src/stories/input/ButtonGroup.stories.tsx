import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from '../../components/ButtonGroup';
import pkg from '../../components/ButtonGroup/package.json';
import Button from '../../components/Button';

export default {
  title: 'Components/Input/ButtonGroup',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>Button</Button>
    <Button color="primary">I am primary coloured.</Button>
    <Button size="large">I am size large.</Button>
  </ButtonGroup>
);

/**
 * Implementation of ButtonGroup
 */
export const Default = Template.bind({});

/**
 * All buttons disabled
 */
export const DisabledGroup = Template.bind({});
DisabledGroup.args = {
  disabled: true,
};

/**
 * Buttons take up full width of the container.
 */
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

/**
 * Buttons are coloured as secondary
 */
export const SecondaryColoured = Template.bind({});
SecondaryColoured.args = {
  color: 'secondary',
};

/**
 * Buttons are aligned vertically
 */
export const VerticalOriented = Template.bind({});
VerticalOriented.args = {
  orientation: 'vertical',
};

/**
 * Textual variant
 */
export const Textual = Template.bind({});
Textual.args = {
  variant: 'text',
};
