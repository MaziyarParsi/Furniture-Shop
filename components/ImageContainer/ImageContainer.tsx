import styled from 'styled-components'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0 8px;
  z-index: 1;
  padding: 1rem;
  transition-duration: 500ms;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    transition-duration: 500ms;
    border-radius: 8px;
  }
  &:last-child {
    margin: 0;
    margin-left: 8px;
  }
  &:first-child {
    margin: 0;
    margin-right: 8px;
  }
  @media (max-width: 1360px) {
    width: 95%;
    margin-bottom: 2rem !important;
  }
  /* height: calc(width); */
`
const ProductNameDiv = styled.div`
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProductName = styled.h2`
  font-size: 16px;
  color: #465773;
`
const ProductTag = styled.p`
  font-size: 12px;
  color: #bbc6d3;
`
const ProductPriceDiv = styled.div`
  width: 100%;
  &.productPrice h3 {
    font-size: 20px;
    color: #11284d;
  }
`

interface ImageContainerProps {
  name: string
  price: string
  source: string
  tag: string
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  name,
  price,
  source,
  tag,
}) => {
  return (
    <ImageBox>
      <ImageWrapper source={source} />
      <ProductNameDiv>
        <ProductName>{name}</ProductName>
        <ProductTag>{tag}</ProductTag>
      </ProductNameDiv>
      <ProductPriceDiv className="productPrice">
        <h3>{price}</h3>
      </ProductPriceDiv>
    </ImageBox>
  )
}

export default ImageContainer
