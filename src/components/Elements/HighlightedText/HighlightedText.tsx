import styled from 'styled-components'
import { HighlightedTextProps } from './HighlightedText.model'

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  return <Container>{text}</Container>
}

const Container = styled.span`
  color: #3a82f7;
  font-size: 1em;
`
