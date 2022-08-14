import Head from 'next/head'
import styled from 'styled-components'
import { Header } from 'src/components/Header/Header'
import { Navbar } from 'src/components/Navbar/Navbar'
import { useState } from 'react'
import { Downloads } from 'src/components/Downloads/Downloads'
import { DownloadVideo } from 'src/apiCalls/DownloadCall'
import { VideoType } from 'src/components/Downloads/Downloads.model'
import { DownloadPageProps } from './DownloadPage.model'

type VideoInfo = {
  videoType: string
  thumbnail: string
  title: string
  channelName: string
  videos: VideoType
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ videoType }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo>()
  const [error, setError] = useState('')

  const handleSearchInput = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  const handleSearchSubmit = async () => {
    const videoURL =
      videoType === 'Youtube' ? searchTerm.split('=')[1] : searchTerm
    if (
      !videoURL ||
      !videoURL.match(
        /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/i
      )
    ) {
      setError(`please enter a valid ${videoType.toLocaleLowerCase()} url`)
      return
    }
    const response = await DownloadVideo(
      `${videoType.toLocaleLowerCase()}`,
      `${videoURL}`
    )
    setVideoInfo(response)
    setError('')
  }

  return (
    <Container>
      <Head>
        <title>{videoType.toLocaleLowerCase()} Video Downloader</title>
        <meta
          name="description"
          content={`${videoType.toLocaleLowerCase()} Video Downloader`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header
        DownloaderType={videoType}
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
          videoType={videoType.toLocaleLowerCase()}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;

  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 670px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 520px) {
    font-size: 6px;
  }
`
