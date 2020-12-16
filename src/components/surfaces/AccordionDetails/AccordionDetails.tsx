import React from 'react'
import MaterialAccordionDetails from '@material-ui/core/AccordionDetails'
import BaseComponentProps from '../../BaseComponentProps/BaseComponentProps'

export interface AccordionDetailsProps extends BaseComponentProps {}

/**
 * Displays details of an Accordion component.
 * @param props The properties of an AccordionDetails component.
 * @constructor Constructs an instance of AccordionDetails.
 */
export const AccordionDetails: React.FC<AccordionDetailsProps> = (
  props: AccordionDetailsProps
) => {
  return (
    <MaterialAccordionDetails {...props}>
      {props.children}
    </MaterialAccordionDetails>
  )
}

export default AccordionDetails
