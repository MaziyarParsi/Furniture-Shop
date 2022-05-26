import { GetStaticProps, NextPage } from 'next'
import Layout from '../../container/Layout/Layout'

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

interface ProductsProps {
  productsList: Array<ProductDetailsProps>
}

const Products: NextPage<ProductsProps> = () => {
  return (
    <div>
      <Layout>products page</Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://my-json-server.typicode.com/MaziyarParsi/demo/products`
  )
  const data = await res.json()

  return {
    props: { productsList: data },
  }
}

export default Products
