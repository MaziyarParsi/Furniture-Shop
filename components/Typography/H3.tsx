import styled from 'styled-components'
import theme from '../../config/theme'

interface IH3Props {
  children: string
}
const StyledH3 = styled.h3`
  font-size: ${theme.typography.h3};
`

const H3: React.FC<IH3Props> = ({ children }) => {
  return <StyledH3>{children}</StyledH3>
}

export default H3
