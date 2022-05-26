import Image from 'next/image'
import styled from 'styled-components'
import Container from '../ContainerDiv/ContainerDiv'
import weCreate from '../../public/assets/images/weCreate.jpg'

const WeCreateDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & .textDiv {
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
  & .infoDiv {
    width: 100%;
    background-color: #f6faff;
    height: fit-content;
    position: relative;
    height: 60%;
    padding: 4rem;
    & p {
      margin-bottom: 0.8rem;
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
  }
  & .numbersDiv {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem 0;
  }
  & .numberDetails {
    width: 30%;
    & h3 {
      font-size: 28px;
      margin-bottom: 0.5rem;
    }
    & p {
      line-height: 1.4rem;
      color: #7b8899;
    }
  }
  & .imageDiv {
    width: 50%;
    position: relative;
    @media (max-width: 960px) {
      display: none;
    }
  }
  & .gap {
    width: 5%;
  }
`

const WeCreate = () => {
  return (
    <Container>
      <WeCreateDiv>
        <div className="textDiv">
          <div className="infoDiv">
            <div style={{ position: 'relative' }}>
              <p>We create</p>
              <h2>MODERN & MINIMALISTIC FORNITURE FOR YOU</h2>
              <section>
                From toys to books and beyond, the Typography Wooden Nested
                Storage Crates are perfect for your home. Add a fun and vibrant
                vibe while maintaining clutter.
              </section>
            </div>
          </div>
          <div className="numbersDiv">
            <div className="numberDetails">
              <h3>250+</h3>
              <p>Created Designs for clinent</p>
            </div>
            <div className="numberDetails">
              <h3>520+</h3>
              <p>Satisfied clinets with the services</p>
            </div>
            <div className="numberDetails">
              <h3>950+</h3>
              <p>Goods in stock in our store</p>
            </div>
          </div>
        </div>
        <div className="gap" />
        <div className="imageDiv">
          <Image src={weCreate} alt="we Create" layout="fill" height={480} />
        </div>
      </WeCreateDiv>
    </Container>
  )
}

export default WeCreate
