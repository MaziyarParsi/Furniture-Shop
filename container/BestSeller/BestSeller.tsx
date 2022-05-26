import Link from 'next/link'
import styled from 'styled-components'
import ImageContainer from '../../components/ImageContainer/ImageContainer'
import Title from '../../components/Title/Title'
import Container from '../ContainerDiv/ContainerDiv'
import products from '../../public/products.json'

const CarouselDiv = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
const ImageDiv = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
  & a {
    color: red;
    text-decoration: none;
  }
`

const BestSeller = () => {
  return (
    <Container>
      <CarouselDiv>
        <Title>BEST SELLERS</Title>
        <ImageDiv>
          {products.map((item) => {
            return (
              <Link href={`/products/${item.id}`} passHref key={item.id}>
                <a href={`/products/${item.id}`}>
                  <ImageContainer
                    name={item.name}
                    source={item.src}
                    price={item.price}
                    tag={item.tag}
                  />
                </a>
              </Link>
            )
          })}
        </ImageDiv>
      </CarouselDiv>
    </Container>
  )
}

export default BestSeller
