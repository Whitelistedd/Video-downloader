import Image from 'next/image'
import styled from 'styled-components'
import { YoutubeDownloadProps } from './YoutubeDownload.model'

export const YoutubeDownload: React.FC<YoutubeDownloadProps> = ({ Video }) => {
  console.log(Video)
  return (
    <Container>
      <Info>
        <Thumbnail>
          <Image
            src={Video?.thumbnails?.[0]?.url}
            alt={Video?.title}
            width={168}
            height={94}
            layout="responsive"
          />
        </Thumbnail>
        <About>
          <Title>{Video?.title}</Title>
          <ChannelName>{Video?.channel?.name}</ChannelName>
          <DownloadButtons>
            {Video?.videos?.items?.map((video, index) => (
              <Anchor
                target="_blank"
                href={video.url}
                key={`button-number-${index}`}
              >
                <DownloadButton>{`${video.quality}.${video.extension}`}</DownloadButton>
              </Anchor>
            ))}
          </DownloadButtons>
        </About>
      </Info>
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

const DownloadButtons = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const ChannelName = styled.p`
  font-size: 1em;
`

const Title = styled.h3`
  font-size: 1.3em;
`

const Thumbnail = styled.div`
  width: 800px;
  height: 100%;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.7em;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
