import { StyledButton } from './styled';
import { ButtonProps } from './types';

function Button({ children, type, className, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
