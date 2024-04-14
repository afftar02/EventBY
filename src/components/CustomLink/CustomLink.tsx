import { StyledLink } from './styled';
import { CustomLinkProps } from './types';

function CustomLink({ children, to, className }: CustomLinkProps) {
  return (
    <StyledLink to={to} className={className}>
      {children}
    </StyledLink>
  );
}

export default CustomLink;
