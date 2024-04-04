import { useEffect, useState } from 'react';
import { checkPasswordComplexity } from 'helpers/checkPasswordComplexity';

import Input from 'components/Input';

import {
  ComplexityLabel,
  ComplexityLabelContainer,
  StrengthBar,
} from './styled';
import { PasswordInputProps } from './types';

function PasswordInput({
  placeholder,
  onChange,
  value,
  isError,
  onClick,
}: PasswordInputProps) {
  const [complexity, setComplexity] = useState('None');

  useEffect(() => {
    setComplexity(checkPasswordComplexity(value));
  }, [value, complexity]);

  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={'password'}
        name={'password'}
        isError={isError}
        onClick={onClick}
      />
      <StrengthBar data-complexity={complexity} />
      <ComplexityLabelContainer>
        <ComplexityLabel data-complexity={complexity}>
          {complexity}
        </ComplexityLabel>
      </ComplexityLabelContainer>
    </div>
  );
}

export default PasswordInput;
