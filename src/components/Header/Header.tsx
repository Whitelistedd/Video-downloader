import styled from 'styled-components'
import { HighlightedText } from '../HighlightedText/HighlightedText'
import { Searchbar } from '../Searchbar/Searchbar'
import { HeaderProps } from './Header.model'

export const Header: React.FC<HeaderProps> = ({
  DownloaderType,
  handleSearchInput,
  searchTerm,
  error,
  handleSearchSubmit,
}) => {
  return (
    <Container>
      <Title>
        {DownloaderType} video <HighlightedText text="downloader" />
      </Title>
      <SubTitle>
        Save videos from {DownloaderType} directly to your device.
      </SubTitle>
      <Error>{error}</Error>
      <Searchbar
        handleSearchInput={handleSearchInput}
        searchTerm={searchTerm}
        handleSearchSubmit={handleSearchSubmit}
      />
    </Container>
  )
}

const Error = styled.p``

const SubTitle = styled.h2`
  color: grey;
  font-weight: 500;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 3.5em;
`

const Container = styled.div`
  background: white;
  margin: 2em;
  gap: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`
