import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  const classNames = clsx('denhaag-card__content', className);
  return <div className={classNames} {...props}></div>;
};

export default CardContent;
