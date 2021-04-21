module.exports = {
  stories: [
    './stories/*.stories.mdx',
    '../src/components/*/*.stories.mdx',
    '../src/components/*/src/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
