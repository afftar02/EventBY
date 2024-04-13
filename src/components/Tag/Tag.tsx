import { TagContainer } from './styled';
import { TagProps } from './types';

function Tag({ value, selected, onClick }: TagProps) {
  return (
    <TagContainer onClick={onClick} $selected={selected}>
      {value}
    </TagContainer>
  );
}

export default Tag;
