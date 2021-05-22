import Heading from 'components/Heading'
import * as S from './styles'

export type TextContextProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContextProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
