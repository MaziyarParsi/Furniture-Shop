import styled from 'styled-components'
import Logo from './components/logo'
import NavigationList from './components/navigationList'
import IconDiv from './components/iconDiv'

const HeaderLayout = styled.div.attrs(
  (props: { colorProps: boolean }) => props
)`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.colorProps ? '#FCFCFC' : '#EAEEF4')};
  border-bottom: ${(props) => (props.colorProps ? '' : '2px solid #F2F2F3')};
  box-shadow: ${(props) =>
    props.colorProps ? 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px' : ''};
`
const StyledHeader = styled.div`
  height: 60px;
  z-index: 1;
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  @media (min-width: 1440px) {
    width: 1360px;
  }
  @media (max-width: 1440px) {
    width: 960px;
  }
  @media (min-width: 628px) {
    max-width: 80%;
  }
  @media (max-width: 628px) {
    max-width: 90%;
  }
`

interface HeaderType {
  main?: boolean
}

const Header: React.FC<HeaderType> = ({ main }) => {
  return (
    <HeaderLayout colorProps={main}>
      <StyledHeader>
        <Logo />
        <NavigationList />
        <IconDiv />
      </StyledHeader>
    </HeaderLayout>
  )
}

export default Header
