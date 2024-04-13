import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};
