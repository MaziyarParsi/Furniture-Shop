import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/assets/logo.svg'
import LogoContainer from './styles'

const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/" passHref>
        <Image src={logo} alt="logo" width={120} height={60} />
      </Link>
    </LogoContainer>
  )
}

export default Logo
