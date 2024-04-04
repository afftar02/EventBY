import { StyledInput } from './styled';
import { InputProps } from './types';

function Input({
  placeholder,
  onChange,
  value,
  type,
  name,
  isError,
  onClick,
}: InputProps) {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      onClick={onClick}
      $isError={isError}
    />
  );
}

export default Input;
