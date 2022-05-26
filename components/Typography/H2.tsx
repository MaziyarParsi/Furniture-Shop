import styled from 'styled-components'
import theme from '../../config/theme'

interface IH2Props {
  children: string
}

const StyledH2 = styled.h2`
  font-size: ${theme.typography.h2};
`
const H2: React.FC<IH2Props> = ({ children }) => {
  return <StyledH2>{children}</StyledH2>
}

export default H2
