import React from "react";
import { Meta, Story } from "@storybook/react";
import Menu, { MenuProps } from "../../components/Menu";
import MenuItem from "../../components/MenuItem";
import Button from "../../components/Button";
import pkg from "../../components/Menu/package.json";

export default {
  title: "Components/Navigation/Menu",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Menu
} as Meta;

const opened = false;

const Template: Story<MenuProps> = (args: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button aria-controls="menu" onClick={handleClick}>
        Click me!
      </Button>
      <Menu {...args}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            id="menu">
        <MenuItem dense={false} onClick={handleClose}>
          <p>The &quot;open&quot; property is set to true to force the menu to be visible for demo purposes.</p>
        </MenuItem>
        <MenuItem dense={false} onClick={handleClose}>
          <span>Click me!</span>
        </MenuItem>
        <MenuItem dense={false} onClick={handleClose}>
          <span>Or me!</span>
        </MenuItem>
        <MenuItem dense={false} onClick={handleClose}>
          <span>Or me!</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

/**
 * Default implementation of the Menu component.
 * "open" property is set to true to force the menu's visibility for demo purposes.
 */
export const Default = Template.bind({});
Default.args = {
  open: opened
};

/**
 * Menu implemented with 'Menu' variant.
 */
export const MenuVariant = Template.bind({});
MenuVariant.args = {
  open: opened,
  variant: "menu"
};
