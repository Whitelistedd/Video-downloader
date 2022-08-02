import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from 'src/components/Navbar/Navbar'
import styled from 'styled-components'
import YoutubeLogo from 'src/assets/images/youtubeLogo.svg'
import TiktokLogo from 'src/assets/images/tiktokLogo.svg'
import Link from 'next/link'

const AllDownloadPages = [
  { name: 'youtube', image: YoutubeLogo },
  { name: 'tiktok', image: TiktokLogo },
]

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Muha Downloader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Wrap>
        <Title>Where do you want to download from?</Title>
        <DownloadPages>
          {AllDownloadPages.map((page, index) => (
            <Link href={page.name} key={`download-button-number-${index}`}>
              <DownloadPage>
                <Image
                  width={100}
                  height={50}
                  src={page.image}
                  alt={page.name}
                />
              </DownloadPage>
            </Link>
          ))}
        </DownloadPages>
      </Wrap>
    </Container>
  )
}

const DownloadPage = styled.button`
  background-color: #3a82f8;
  border-radius: 10px;
  padding: 0.5em 1em;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

const Title = styled.h1``

const DownloadPages = styled.div`
  gap: 1em;
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  gap: 1em;
  width: 100%;
`

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
`

export default Home
