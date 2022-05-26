import React from 'react'
import Image from 'next/image'
import { Tablet } from 'react-feather'
import styled from 'styled-components'
import Layout from '../../container/Layout/Layout'
import ContactUsImage from '../../public/assets/images/WorldMap.svg'
import Container from '../../container/ContainerDiv/ContainerDiv'

const ContactUsImageDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  position: relative;
  & .imageDiv {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & h2 {
    font-size: 38px;
    font-weight: 600;
    color: white;
    margin-bottom: 8px;
  }
  & p {
    color: white;
    width: 40rem;
    line-height: 1.4;
    text-align: center;
  }
`
const ContactUsMainDiv = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .textDiv {
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 960px) {
      width: 100%;
    }
    & .contactInfo {
      margin-left: 8px;
      margin-top: 1rem;
      display: flex;
      & p {
        font-size: 16px;
        width: fit-content;
      }
      & h3 {
        font-size: 16px;
        font-weight: 600;
      }
    }
    & .EmailInfo {
      margin-top: 2rem;
    }
  }

  & .formDiv {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;
      width: 80%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      border-radius: 8px;
    }
  }
`

const ContactUs = () => {
  return (
    <Layout>
      <ContactUsImageDiv>
        <Image src={ContactUsImage} alt="contact us" layout="fill" />
        <div className="imageDiv">
          <h2>We’d love to hear from you</h2>
          <p>
            Have questions about our products, features, trials, or pricing?
            Need a demo? Our teams will help you.
          </p>
        </div>
      </ContactUsImageDiv>
      <Container>
        <ContactUsMainDiv>
          <div className="textDiv">
            <Tablet size={48} color="#1C538E" />
            <div className="contactInfo">
              <p>
                Interested in any of our products? Talk to our experts today
              </p>
            </div>
            <div className="contactInfo">
              <h3>US</h3>
              <p>: +1 (855) 747 6767</p>
            </div>
            <div className="contactInfo">
              <h3>UK</h3>
              <p>: +44 8081 698 824 | +44 189 280 5040</p>
            </div>
            <div className="contactInfo">
              <h3>UAE</h3>
              <p>: +971 800 032 0520</p>
            </div>
            <div className="contactInfo">
              <h3>Turkey</h3>
              <p>: +90 850 390 7434</p>
            </div>
            <div className="contactInfo">
              <h3>France</h3>
              <p>: +33 17 585 0312</p>
            </div>
            <div className="EmailInfo contactInfo">
              <h3>Email</h3>
              <p>: sales@Forniture.com | support@Forniture.com</p>
            </div>
          </div>
          <div className="formDiv" />
        </ContactUsMainDiv>
      </Container>
    </Layout>
  )
}

export default ContactUs
