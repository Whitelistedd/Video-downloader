import AudioSVG from 'public/svg/audio.svg'
import { Buttons } from '../DownloadButtons/Buttons'
import { DownloadProps } from './Downloads.model'
import Image from 'next/image'
import VideoSVG from 'public/svg/video.svg'
import styled from 'styled-components'

export const Downloads: React.FC<DownloadProps> = ({ videos, audios }) => {
  return (
    <Container>
      <Videos>
        <Title>
          <Image width={20} height={20} src={VideoSVG} />
          Video
        </Title>
        <Buttons downloads={videos} />
      </Videos>
      <Videos>
        <Title>
          <Image width={19} height={19} src={AudioSVG} />
          Audio
        </Title>
        <Buttons downloads={audios} />
      </Videos>
    </Container>
  )
}

const Title = styled.h5`
  display: flex;
  gap: 5px;
  align-items: flex-end;
  font-size: 17px;
  font-weight: 500;
`

const Videos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  padding: 1em 2em;
`
