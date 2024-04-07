import { FallbackContainer, FallbackText } from './styled';

function ErrorFallback() {
  return (
    <FallbackContainer>
      <FallbackText>Упс... Что-то пошло не так!😢</FallbackText>
    </FallbackContainer>
  );
}

export default ErrorFallback;
