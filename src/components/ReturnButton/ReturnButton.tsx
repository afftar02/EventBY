import CustomLink from 'components/CustomLink';

import { StyledButton } from './styled';
import { ReturnButtonProps } from './types';

function ReturnButton({ link, className }: ReturnButtonProps) {
  return (
    <CustomLink to={link} className={className}>
      <StyledButton>
        <img src={'/images/back-arrow.svg'} alt={'Back'} />
      </StyledButton>
    </CustomLink>
  );
}

export default ReturnButton;
