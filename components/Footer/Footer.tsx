import Image from 'next/image'
import { Instagram, Twitter, Youtube } from 'react-feather'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../../public/assets/logo.svg'

const FooterDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #ebebeb;
  background-color: #fcfcfc;
  & .container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1440px) {
      width: 1360px;
    }
    @media (min-width: 628px) {
      width: 80%;
    }
    @media (max-width: 628px) {
      width: 90%;
    }
  }
  & .footerParagraph {
    color: #afbecd;
    font-size: 14px;
    @media (max-width: 752px) {
      display: none;
    }
  }
  & .iconDiv {
    display: flex;
    width: fit-content;
  }
  & .iconHolder {
    height: 38px;
    width: 38px;
    border-radius: 100px;
    background-color: #f1f7ff;
    margin-right: 8px;
    transition-duration: 500ms;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      transition-duration: 500ms;
    }
    & :hover {
      cursor: pointer;
      background-color: #ebeef2;
      transition-duration: 500ms;
      svg {
        color: #6969ae;
        transition-duration: 500ms;
      }
    }
  }
  .logo {
    &:hover {
      cursor: pointer;
    }
  }
`

const Footer = () => {
  return (
    <FooterDiv>
      <div className="container">
        <div className="logo">
          <Link href="/" passHref>
            <Image src={Logo} alt="logo" width={120} height={80} />
          </Link>
        </div>
        <div className="footerParagraph">
          <p>© 2021 Modern & Minimalistic Furniture</p>
        </div>
        <div className="iconDiv">
          <div className="iconHolder">
            <Instagram size={18} />
          </div>
          <div className="iconHolder">
            <Twitter size={18} />
          </div>
          <div className="iconHolder">
            <Youtube size={18} />
          </div>
        </div>
      </div>
    </FooterDiv>
  )
}

export default Footer
