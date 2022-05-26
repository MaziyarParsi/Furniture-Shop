const dev = process.env.NODE_ENV !== 'production'

const server = dev
  ? 'http://localhost:3000/products.json'
  : '../../products.json'

export default server
