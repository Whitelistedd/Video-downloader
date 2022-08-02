import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { Header } from 'src/components/Header/Header'
import { Navbar } from 'src/components/Navbar/Navbar'
import { useState } from 'react'

const TiktokPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')

  const handleSearchInput = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  const handleSearchSubmit = () => {
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
        DownloaderType={'TikTok'}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        error={error}
      />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
`

export default TiktokPage
