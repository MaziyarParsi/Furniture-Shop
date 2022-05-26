import styled from 'styled-components'
import theme from '../../config/theme'

interface IParagraphProps {
  children: string
}
const StyledParagraph = styled.p`
  font-size: ${theme.typography.p};
`

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph
