import styled from 'styled-components'
import { DownloadButtonProps } from '../DownloadButtons.model'

export const YoutubeButtons: React.FC<DownloadButtonProps> = ({ videos }) => {
  return (
    <Container>
      {videos?.map((video, index) => (
        <Anchor target="_blank" href={video.url} key={`button-number-${index}`}>
          <DownloadButton>{`${video.quality}.${video.extension}`}</DownloadButton>
        </Anchor>
      ))}
    </Container>
  )
}

const Anchor = styled.a``

const DownloadButton = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: #3a82f7;
  border: none;
  border-radius: 10px;
  outline: none;
  color: white;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div``
