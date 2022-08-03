import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { Header } from 'src/components/Header/Header'
import { Navbar } from 'src/components/Navbar/Navbar'
import { useState } from 'react'
import { Downloads } from 'src/components/Downloads/Downloads'
import { DownloadVideo } from 'src/apiCalls/DownloadCall'
import { VideoType } from 'src/components/Downloads/Downloads.model'

type VideoInfo = {
  videoType: string
  thumbnail: string
  title: string
  channelName: string
  videos: VideoType
}

const Instagram: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo>()
  const [error, setError] = useState('')

  const handleSearchInput = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  const handleSearchSubmit = async () => {
    const instagramURL = searchTerm
    if (!instagramURL) {
      setError('please enter a valid instagram url')
      return
    }
    const response = await DownloadVideo('instagram', `${instagramURL}`)
    setVideoInfo(response)
    setError('')
  }

  return (
    <Container>
      <Head>
        <title>Muha Downloader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header
        DownloaderType={'Instagram'}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        error={error}
      />
      {videoInfo && (
        <Downloads
          title={videoInfo.title}
          thumbnail={videoInfo.thumbnail}
          videos={videoInfo.videos}
          channelName={videoInfo.channelName}
          videoType={'instagram'}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
`

export default Instagram
