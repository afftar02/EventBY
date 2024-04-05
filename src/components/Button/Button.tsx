import { StyledButton } from './styled';
import { ButtonProps } from './types';

function Button({ children, type, className }: ButtonProps) {
  return (
    <StyledButton type={type} className={className}>
      {children}
    </StyledButton>
  );
}

export default Button;
