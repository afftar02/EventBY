import { StyledLink } from './styled';
import { CustomLinkProps } from './types';

function CustomLink({ children, to }: CustomLinkProps) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

export default CustomLink;
