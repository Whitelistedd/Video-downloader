import styled from 'styled-components'
import { SearchbarProps } from './Searchbar.model'

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
          Download
        </SearchButton>
      </Wrap>
    </Container>
  )
}

const SearchButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #1e2837;
  color: white;
  min-width: 90px;
  margin: 0.3em;
  font-size: 1em;

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
  border-radius: 5px;
  margin: 1em;
  gap: 10px;
`

const Container = styled.div`
  max-width: 100%;
  min-width: 500px;
  font-size: 16px;

  @media only screen and (max-width: 520px) {
    min-width: 200px;
    font-size: 7px;
  }
`
