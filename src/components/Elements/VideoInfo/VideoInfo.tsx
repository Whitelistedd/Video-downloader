import { Buttons } from '../DownloadButtons/Buttons'
import Image from 'next/image'
import { VideoInfoProps } from './VideoInfo.model'
import styled from 'styled-components'

export const VideoInfo: React.FC<VideoInfoProps> = ({
  thumbnail,
  title,
  viewCount,
  channelName,
}) => {
  return (
    <Container>
      <Info>
        <Thumbnail
          src={`https://muha.mo.cloudinary.net/getImage/${thumbnail}`}
          alt={title}
          width={170}
          height={126}
        />
        <About>
          <InfoGroup>
            <Title>{title}</Title>
          </InfoGroup>
          <InfoGroup>
            <ViewCount>{viewCount} views</ViewCount>
            <ChannelName>{channelName}</ChannelName>
          </InfoGroup>
        </About>
      </Info>
    </Container>
  )
}
const ChannelName = styled.p`
  font-size: 0.9em;
`

const ViewCount = styled(ChannelName)``

const Title = styled.h3`
  font-size: 1em;
  font-weight: 500;
`

const Thumbnail = styled(Image)`
  object-fit: cover;
`

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

const About = styled.div`
  display: flex;
  padding: 7px 0px;
  flex-direction: column;
  justify-content: space-between;
`

const Info = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
`
