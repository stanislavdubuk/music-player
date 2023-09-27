import * as React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: 'primary' | 'ghost';
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  onClick,
  theme = 'primary',
  disabled,
}: ButtonProps) => (
  <button
    className={cn(s.button, s[`theme_${theme}`], className)}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
