import styled from 'styled-components'
import theme from '../../config/theme'

interface IH1Props {
  children: string
}
const StyledH1 = styled.h1`
  font-size: ${theme.typography.h1};
`

const H1: React.FC<IH1Props> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>
}

export default H1
