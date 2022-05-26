import styled from 'styled-components'
import theme from '../../config/theme'

interface IH4Props {
  children: string
}
const StyledH4 = styled.h4`
  font-size: ${theme.typography.h4};
`
const H4: React.FC<IH4Props> = ({ children }) => {
  return <StyledH4>{children}</StyledH4>
}

export default H4
