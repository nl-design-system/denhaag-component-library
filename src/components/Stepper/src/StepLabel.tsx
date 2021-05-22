import React from 'react';
import MaterialStepLabel from '@material-ui/core/StepLabel';
import BaseProps from '@gemeente-denhaag/baseprops';

import { StepIconProps } from './StepIcon';
import { stepLabelClasses } from './styles/bem-mapping';

export interface StepLabelProps extends BaseProps {
  /**
   * Mark the step as disabled, will also disable the button if StepLabelButton is a child of StepLabel.
   * Is passed to child components.
   */
  disabled?: boolean;

  /**
   * The optional node to display.
   */
  optional?: React.ReactNode;

  /**
   * Mark the step as failed.
   */
  error?: boolean;

  /**
   * The label displayed in the step icon.
   */
  icon?: number;

  /**
   * The component to render in place of the StepIcon.
   */
  StepIconComponent?: React.ElementType;

  /**
   * Props applied to the StepIcon element.
   */
  StepIconProps?: Partial<StepIconProps>;
}

/**
 * Shows a label in a Step component within a Stepper component.
 * @param props The properties of a StepLabel component.
 * @constructor Constructs an instance of StepLabel.
 */
export const StepLabel: React.FC<StepLabelProps> = (props: StepLabelProps) => {
  return <MaterialStepLabel classes={stepLabelClasses} {...props} />;
};

export default StepLabel;
