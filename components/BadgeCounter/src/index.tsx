import React, { HTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export type BadgeCounterProps = HTMLAttributes<HTMLDivElement>;

/**
 * A counter badge notifies a user of a specific amount of updates.
 * @param props The properties of a Badge component.
 * @constructor Constructs an instance of Badge.
 */
export const BadgeCounter: React.FC<BadgeCounterProps> = (props: BadgeCounterProps) => {
  const rootClassNames = clsx('denhaag-badge-counter', props.className);
  return (
    <div id={props.id} className={rootClassNames}>
      <div className={'denhaag-badge-counter__counter'}>{props.children}</div>
    </div>
  );
};

export default BadgeCounter;
