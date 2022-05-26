import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import HeroSection from '../container/HeroSection/HeroSection'
import Layout from '../container/Layout/Layout'
import BestSeller from '../container/BestSeller/BestSeller'
import WeCreate from '../container/WeCreate/WeCreate'
import NewsLetter from '../container/NewsLetter/NewsLetter'
import theme from '../config/theme'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HeroSection />
        <BestSeller />
        <WeCreate />
        <NewsLetter />
      </Layout>
    </ThemeProvider>
  )
}

export default Home
