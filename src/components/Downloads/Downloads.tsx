import Image from 'next/image'
import styled from 'styled-components'
import { TiktokButton } from './DownloadButtons/TiktokButton/TiktokButton'
import { YoutubeButtons } from './DownloadButtons/YoutubeButton/YoutubeButton'
import { DownloadProps } from './Downloads.model'

export const Downloads: React.FC<DownloadProps> = ({
  thumbnail,
  videoType,
  title,
  channelName,
  videos,
}) => {
  return (
    <Container>
      <Info>
        <Thumbnail
          src={`https://muha.mo.cloudinary.net/getImage/${thumbnail}`}
          alt={title}
          width={
            videoType === 'youtube' ? 368 : videoType === 'tiktok' ? 250 : 0
          }
          height={
            videoType === 'youtube' ? 220 : videoType === 'tiktok' ? 400 : 0
          }
        />
        <About>
          <Title>{title}</Title>
          <ChannelName>{channelName}</ChannelName>
          <DownloadButtons>
            {videoType === 'youtube' && <YoutubeButtons videos={videos} />}
            {videoType === 'tiktok' && <TiktokButton videos={videos} />}
          </DownloadButtons>
        </About>
      </Info>
    </Container>
  )
}

const DownloadButtons = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const ChannelName = styled.p`
  font-size: 1em;
  font-weight: 500;
`

const Title = styled.h3`
  font-size: 1.3em;
  font-weight: 800;
`

const Thumbnail = styled(Image)`
  border-radius: 10px;
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

  span {
    outline: 5px solid #3a82f7;
    border-radius: 10px;
    padding: 0.5em;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
