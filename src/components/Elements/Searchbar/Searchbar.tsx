import DownloadSVG from 'public/svg/download.svg'
import Image from 'next/image'
import React from 'react'
import { SearchbarProps } from './Searchbar.model'
import styled from 'styled-components'

export const Searchbar: React.FC<SearchbarProps> = ({
  searchTerm,
  handleSearchInput,
  handleSearchSubmit,
}) => {
  return (
    <Container>
      <Wrap>
        <SearchInput
          onChange={(e) => handleSearchInput(e.target.value)}
          value={searchTerm}
          placeholder="Type the url here"
        />
        <SearchButton onClick={() => handleSearchSubmit()}>
          <Download src={DownloadSVG} />
        </SearchButton>
      </Wrap>
    </Container>
  )
}

const Download = styled(Image)`
  img {
    color: red !important;
  }
`

const SearchButton = styled.button`
  border: none;
  background-color: #1eb5c8;
  color: white;
  min-width: 100px;
  font-size: 1em;
  box-shadow: 0px 0px 10px #1eb5c8;

  &:hover {
    cursor: pointer;
  }
`

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 1.3em;
  font-size: 1em;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e5e7;
  background-color: white;
  border-radius: 5px;
  gap: 10px;
  height: 60px;
`

const Container = styled.div`
  max-width: 100%;
  min-width: 500px;
  font-size: 16px;
  height: 60px;

  @media only screen and (max-width: 520px) {
    min-width: 200px;
    font-size: 7px;
  }
`
