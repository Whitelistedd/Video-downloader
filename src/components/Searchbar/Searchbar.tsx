import styled from 'styled-components'
import { SearchbarProps } from './Searchbar.model'

export const Searchbar: React.FC<SearchbarProps> = ({
  searchTerm,
  handleSearchInput,
  handleSearchSubmit,
}) => {
  return (
    <Container>
      <SerachInput
        onChange={(e) => handleSearchInput(e.target.value)}
        value={searchTerm}
        placeholder="Type the url here"
      />
      <SearchButton onClick={() => handleSearchSubmit()}>Download</SearchButton>
    </Container>
  )
}

const SearchButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #1e2837;
  color: white;
  min-width: 90px;

  &:hover {
    cursor: pointer;
  }
`

const SerachInput = styled.input`
  padding: 1em;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e0e5e7;
  outline: none;

  &:focus {
    outline: 2px solid #3a82f7;
  }
`

const Container = styled.div`
  width: 40%;
  min-width: 500px;
  display: flex;
  margin: 1em;
  gap: 10px;
`
