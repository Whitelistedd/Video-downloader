export interface HeaderProps {
  DownloaderType: string
  searchTerm: string
  error: string
  handleSearchInput: (searchTerm: string) => void
  handleSearchSubmit: () => void
}
