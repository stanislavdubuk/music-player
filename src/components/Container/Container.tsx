import * as React from 'react';
import cn from 'classnames';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn(s.container, className)}>{children}</div>
);
