import Image from 'next/image'
import styled from 'styled-components'
import Container from '../ContainerDiv/ContainerDiv'
import newsLetter from '../../public/assets/images/newsLetter.jpg'

const NewsLetterDiv = styled.div`
  width: 100%;
  min-height: 540px;
  display: flex;
  justify-content: center;
  & .imageDiv {
    width: 50%;
    position: relative;
    @media (max-width: 960px) {
      display: none;
    }
  }
  & .newsInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f1f7ff;
    margin-top: 2rem;
    height: 480px;
    width: 60%;
    padding: 0rem 4rem;
    @media (max-width: 960px) {
      width: 100%;
      margin-top: 0;
    }
    & p {
      margin-bottom: 0.5rem;
    }
    & h2 {
      font-size: 28px;
      font-weight: 600;
      line-height: 2rem;
      width: auto;
    }
    & section {
      margin-top: 1rem;
      line-height: 1.4rem;
      color: #7b8899;
    }
    & input {
      border: none;
      outline: none;
      background-color: #f1f7ff;
      border-bottom: 1px solid #c7d5e0;
      padding: 0.5rem;
      &:focus {
        background-color: #f1f7ff;
        border-bottom: 1px solid #81a5c6;
        outline: none;
        transition-duration: 500ms;
      }
    }
    & .formContainer {
      margin-top: 1rem;
      width: '100%';
      position: 'relative';
      display: flex;
      align-items: center;
    }
    & .form {
      position: relative;
      & input {
        width: 100%;
      }
      & button {
        position: absolute;
        right: 0;
        bottom: 0.5rem;
        font-size: 16px;
        border: none;
        color: #00234d;
        background-color: transparent;
        &:hover {
          cursor: pointer;
          color: #1b58a1;
          transition-duration: 500ms;
        }
      }
    }
  }
`

const NewsLetter = () => {
  return (
    <Container>
      <NewsLetterDiv>
        <div className="imageDiv">
          <Image src={newsLetter} alt="Newsletter Info" layout="fill" />
        </div>
        <div className="newsInfo">
          <p>Subscribe to our</p>
          <h2>NEWSLETTER</h2>
          <section>
            Get promotion, discounts and new products in your Email
          </section>
          <div className="formContainer">
            <form action="" style={{ width: '100%' }}>
              <div className="form">
                <input placeholder="E-mail" />
                <button type="submit">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </NewsLetterDiv>
    </Container>
  )
}

export default NewsLetter
