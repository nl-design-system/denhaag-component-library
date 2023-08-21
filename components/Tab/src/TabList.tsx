import React, { HTMLAttributes, forwardRef } from 'react';
import './styles/tabs.scss';
import clsx from 'clsx';

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * TabList make it easy to explore and switch between different views.
 * @param props The properties of a TabList component.
 * @constructor Constructs an instance of TabList.
 */
export const TabList = forwardRef<HTMLDivElement, TabListProps>(({ className, children, ...props }, ref) => {
  const rootClassNames = clsx('denhaag-tabs__list', className);

  return (
    <div {...props} role="tablist" ref={ref} className={rootClassNames}>
      {children}
    </div>
  );
});

export default TabList;
