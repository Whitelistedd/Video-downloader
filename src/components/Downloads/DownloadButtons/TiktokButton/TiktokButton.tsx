import styled from 'styled-components'
import { DownloadButtonProps } from '../DownloadButtons.model'

export const TiktokButton: React.FC<DownloadButtonProps> = ({ videos }) => {
  return (
    <Container>
      {videos?.map((video, index) => (
        <Anchor
          target="_blank"
          href={`https://muha.mo.cloudinary.net/getVideo/${video.url}`}
          key={`button-number-${index}`}
        >
          <DownloadButton>Download</DownloadButton>
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
