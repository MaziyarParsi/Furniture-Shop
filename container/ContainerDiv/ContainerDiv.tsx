import styled from 'styled-components'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  padding: 5rem 0;
  @media (min-width: 1440px) {
    width: 1360px;
  }
  @media (min-width: 628px) {
    max-width: 80%;
  }
  @media (max-width: 628px) {
    max-width: 90%;
  }
  @media (max-width: 960px) {
    padding: 4.5rem 0;
  }
`

interface ContainerType {
  children?: React.ReactNode
}

const Container: React.FC<ContainerType> = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>
}

export default Container
