import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Heart } from 'react-feather'
import styled from 'styled-components'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Container from '../../container/ContainerDiv/ContainerDiv'
import Layout from '../../container/Layout/Layout'
import Button from '../../components/Button/Button'

const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  & .imageDiv {
    width: 40%;
    margin-bottom: 1.5rem;
    position: relative;
    background-color: #f6faff;
    display: flex;
    justify-content: center;
    height: 60vh;
  }
  & .descriptionDiv {
    width: 60%;
    height: fit-content;
    padding-left: 3rem;
    padding-top: 0.2rem;
    & h1 {
      font-size: 32px;
      margin-bottom: 2rem;
    }
    & p {
      line-height: 1.6;
      text-align: start;
      width: 85%;
      color: #6f86a0;
      margin-bottom: 3rem;
    }
    & .buttonContainer {
      display: flex;
      align-items: center;
      & button {
        background-color: #00234d;
        transition-duration: 500ms;
        color: white;
        font-family: poppins;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 2.5rem;
        margin-right: 1rem;
        &:hover {
          cursor: pointer;
          background-color: #0b4c9a;
          transition-duration: 500ms;
          transform: scale(1.05);
        }
      }
      & .icon {
        transition-duration: 500ms;
        color: #00234d;
        &:hover {
          cursor: pointer;
          color: #0b4c9a;
          transform: scale(1.2);
          transition-duration: 500ms;
        }
      }
    }
  }
`
const DescriptionDiv = styled.div`
  width: 40%;
  & h2 {
    color: #00234d;
    font-size: 16px;
    margin-bottom: 8px;
  }
  & .infoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    font-size: 14px;
    color: #94a1b2;
  }
  & p.value {
    color: #4e75a3;
  }
`
interface ProductDetailsProps {
  product: {
    id: number
    name: string
    price: string
    src: string
    tag: string
    category: string
    country: string
    description: string
    dimention: string
    material: string
  }
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  return (
    <Layout>
      <Container>
        <BreadCrumb name={product.name}>products/</BreadCrumb>
        <ProductDiv>
          <div className="imageDiv">
            <Image src={product.src} alt="product Picture" layout="fill" />
          </div>
          <div className="descriptionDiv">
            <h1>{product.price}</h1>
            <p>{product.description}</p>
            <div className="buttonContainer">
              <Button type="submit">Add to cart</Button>
              <Heart className="icon" />
            </div>
          </div>
        </ProductDiv>
        <DescriptionDiv>
          <h2>Description</h2>
          <div className="infoContainer">
            <p>Category</p>
            <p className="value">{product.category}</p>
          </div>
          <div className="infoContainer">
            <p>Size</p>
            <p className="value">{product.dimention}</p>
          </div>
          <div className="infoContainer">
            <p>Material</p>
            <p className="value">{product.material}</p>
          </div>
          <div className="infoContainer">
            <p>Brand</p>
            <p className="value">{product.tag}</p>
          </div>
          <div className="infoContainer">
            <p>Country</p>
            <p className="value">{product.country}</p>
          </div>
        </DescriptionDiv>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://my-json-server.typicode.com/MaziyarParsi/demo/products`
  )
  const data = await res.json()

  const paths = data.map((item: { id: { toString: () => any } }) => {
    return {
      params: { id: item.id.toString() },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id: string | string[] | undefined = context?.params?.id
  const res = await fetch(
    `https://my-json-server.typicode.com/MaziyarParsi/demo/products/${id}`
  )
  const data = await res.json()

  return {
    props: { product: data },
  }
}

export default ProductDetails
