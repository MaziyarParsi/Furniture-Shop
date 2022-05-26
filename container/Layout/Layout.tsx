import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  &:last-child {
  }
`

interface LayoutProps {
  Children?: React.ReactNode
  main?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, main }) => {
  return (
    <LayoutContainer>
      <Header main={main} />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
