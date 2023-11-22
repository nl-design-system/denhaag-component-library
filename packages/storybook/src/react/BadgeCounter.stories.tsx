import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter } from '@gemeente-denhaag/badge-counter';
import readme from '../../../../components/Button/README.md';

const exampleArgs = {
  children: '13',
};

const meta = {
  id: 'react-data-display-badge-counter',
  title: 'React/Data Display/Badge Counter',
  component: BadgeCounter,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof BadgeCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
