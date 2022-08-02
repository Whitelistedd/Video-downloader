import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from 'src/components/Navbar/Navbar'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Muha Downloader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
`

export default Home
