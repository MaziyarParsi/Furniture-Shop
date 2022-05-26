import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #11284d;
  font-weight: 500;
  margin-left: 38px;
  &::before {
    content: '';
    display: block;
    width: 32px;
    border-radius: 50px;
    height: 3px;
    background: #11284d;
    left: 0;
    top: 22px;
    position: absolute;
  }
`
const TitleDiv = styled.div`
  height: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  height: 44px;
  width: 250px;
  margin-bottom: 1rem;
`

interface titleProps {
  children?: string
}

const Title: React.FC<titleProps> = ({ children }) => {
  return (
    <TitleDiv>
      <StyledTitle>{children}</StyledTitle>
    </TitleDiv>
  )
}

export default Title
