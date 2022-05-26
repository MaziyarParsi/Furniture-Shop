/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { StyledNavbar, StyledList } from './styles'

const NavigationList = () => {
  return (
    <div>
      <StyledNavbar>
        <Link href="/" passHref>
          <a>
            <StyledList>Home</StyledList>
          </a>
        </Link>
        <StyledList>Catalog</StyledList>
        <Link href="/about-us" passHref>
          <a>
            <StyledList>About Us</StyledList>
          </a>
        </Link>
        <Link href="/contact-us" passHref>
          <a>
            <StyledList>Contact</StyledList>
          </a>
        </Link>
      </StyledNavbar>
    </div>
  )
}

export default NavigationList
