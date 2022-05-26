import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Container from '../../container/ContainerDiv/ContainerDiv'
import Layout from '../../container/Layout/Layout'
import notFound from '../../public/assets/images/notFound.svg'

const NotFoundDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  & .textContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    & h2 {
      font-size: 34px;
      margin-bottom: 16px;
    }
    & button {
      padding: 0.8rem 2.5rem;
      margin-top: 12px;
      font-family: poppins;
      background-color: #6969ae;
      color: white;
      border-radius: 5px;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

const NotFound = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <Layout main>
      <Container>
        <NotFoundDiv>
          <Image src={notFound} alt="404 page" width={600} height={400} />
          <div className="textContainer">
            <h2>Whoops</h2>
            <p>Sorry, we cant find that page. </p>
            <button type="submit" onClick={handleClick}>
              Back to Homepage
            </button>
          </div>
        </NotFoundDiv>
      </Container>
    </Layout>
  )
}

export default NotFound
