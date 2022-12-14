import Head from 'next/head'
import { LayoutProps } from './Layout.model'
import { Navbar } from 'src/components/Navbar/Navbar'
import styled from 'styled-components'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Video Downloader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Wrap>{children}</Wrap>
    </Container>
  )
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #69696939;
`
