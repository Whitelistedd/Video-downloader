import { DownloadVideo } from 'src/services/api/DownloadVideo'
import { Downloads } from 'src/components/Elements/Downloads/Downloads'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from 'src/components/Navbar/Navbar'
import type { NextPage } from 'next'
import { Searchbar } from 'src/components/Elements/Searchbar/Searchbar'
import { VideoInfo } from 'src/components/Elements/VideoInfo/VideoInfo'
import styled from 'styled-components'
import { useState } from 'react'

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [videoInfo, setVideoInfo] = useState({
    videos: [],
    audios: [],
    title: '',
    thumbnail: '',
    channelName: '',
    views: 0,
  })

  const handleVideoSearch = async () => {
    const res = await DownloadVideo(searchTerm)
    setVideoInfo(res)
  }

  return (
    <Container>
      <Wrap>
        <Title>Free Video Downloader</Title>
        <Searchbar
          searchTerm={searchTerm}
          handleSearchSubmit={() => handleVideoSearch()}
          handleSearchInput={(value) => setSearchTerm(value)}
        />
        {videoInfo?.videos?.length > 0 && (
          <>
            <VideoInfo
              title={videoInfo.title}
              viewCount={videoInfo.views}
              thumbnail={videoInfo.thumbnail}
              channelName={videoInfo.channelName}
            />
            <Downloads videos={videoInfo?.videos} audios={videoInfo.audios} />
          </>
        )}
      </Wrap>
    </Container>
  )
}

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1em;
  width: 100%;
  padding: 1em;
`

const Container = styled.div`
  padding-top: 100px;
  min-height: calc(100vh - 80px);
  width: 100%;
  height: 100%;
  max-width: 1440px;

  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`

export default Home
