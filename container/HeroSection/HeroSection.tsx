import Image from 'next/image'
import styled from 'styled-components'
import backgroundImage from '../../public/assets/images/mainBackground.jpg'
import Container from '../ContainerDiv/ContainerDiv'

const HeroSectionDiv = styled.div`
  width: 100%;
  height: 92vh;
  margin-top: -4px;
  display: flex;
  position: relative;
  justify-content: center;
`
const TextDiv = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  p {
    font-size: 14px;
    font-weight: 200;
    margin-bottom: 12px;
    color: #465773;
  }
  p:before {
    display: inline-block;
    content: '-';
    margin-left: -4px;
    padding: 4px;
    text-decoration: none;
  }
  h2 {
    font-size: 72px;
    font-weight: 500;
    margin-left: -2px;
    letter-spacing: 2px;
    width: 620px;
    color: #11284d;
  }
  @media (max-width: 760px) {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    p:before {
      display: none;
    }
    h2 {
      font-size: 28px;
      font-weight: 600;
      width: auto;
    }
  }
`
const TextArea = styled.text`
  margin-top: 24px;
  width: 420px;
  line-height: 22px;
  z-index: 1;
  font-size: 16px !important;
  color: #7b8899;
  @media (max-width: 760px) {
    width: auto;
    font-size: 14px;
    text-align: center;
    color: #7b8899;
  }
`

const HeroSection = () => {
  return (
    <HeroSectionDiv>
      <Container>
        <TextDiv>
          <p>Modern & Minimalistic</p>
          <h2>CREATE YOUR OWN STYLE.</h2>
          <TextArea>
            As time goes by the memories of sitting on the edge of a bed and
            reading aloud with your kid are going to be very meaningful in your
            own mental scrapbook.
          </TextArea>
        </TextDiv>
      </Container>
      <Image
        className="heroMobileImage"
        src={backgroundImage}
        alt="heroSection"
        objectFit="cover"
        layout="fill"
      />
    </HeroSectionDiv>
  )
}
export default HeroSection
