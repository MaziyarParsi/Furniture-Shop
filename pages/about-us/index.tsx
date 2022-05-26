import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../../container/Layout/Layout'
import Container from '../../container/ContainerDiv/ContainerDiv'
import weDifferent from '../../public/assets/images/weDifferent.jpg'
import NewsLetter from '../../container/NewsLetter/NewsLetter'

const AboutUsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .AboutUs {
    display: flex;
    align-items: center;
    & .image {
      width: 50%;
      height: 100%;
      @media (max-width: 960px) {
        display: none;
      }
    }
    & .text {
      width: 50%;
      min-height: 40vh;
      height: fit-content;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media (max-width: 960px) {
        width: 100%;
      }
      h2 {
        font-size: 36px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 1rem;
        margin-right: 1.2rem;
        @media (max-width: 960px) {
          margin-right: 0;
        }
      }
      p {
        width: 85%;
        color: #8e8ea3;
        text-align: left;
        line-height: 1.4;
      }
    }
  }
`

const Qoute = styled.div`
  width: 100%;
  min-height: 30vh;
  padding: 4rem 0;
  height: fit-content;
  display: flex;
  justify-content: center;
  & h3 {
    width: 90%;
    height: fit-content;
    font-size: 52px;
    line-height: 1.3;
    text-align: center;
  }
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
    padding: 1rem 0;
    h3 {
      font-size: 28px;
    }
  }
`

const AboutUs: NextPage = () => {
  return (
    <Layout main>
      <Container>
        <AboutUsDiv>
          <div className="AboutUs">
            <div className="image">
              <Image src={weDifferent} alt="we Think Diferent" />
            </div>
            <div className="text">
              <h2>We’re different by design</h2>
              <p>
                Our story started with a problem (the best ideas usually do).
                Some ten years ago, our founder was furnishing his flat.
                Frustrated at the lack of well-designed, good quality and
                affordable sofas, he set about redefining the process. The
                concept was clear: collaborate with independent designers and
                makers to create pieces you’ll love, minus the mark-up. And so
                MADE.COM was born. The destination for creating your dream home.
              </p>
            </div>
          </div>
        </AboutUsDiv>
      </Container>

      <Qoute>
        <h3>
          “When it comes to your home, we believe you can have it all: great
          design and quality, at an affordable price.”
        </h3>
      </Qoute>
      <NewsLetter />
    </Layout>
  )
}

export default AboutUs
